import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './content.scss'

// 定义类型接口
interface ContentType {
  id: string
  title: string
  content: string
  category_id: string
}

interface CategoryType {
  id: string
  name: string
}

export const Content = () => {
  const { content, categories } = useLoaderData() as {
    content: ContentType
    categories: CategoryType[]
  }
  const submit = useSubmit()
  const [isPreview, setIsPreview] = useState(true)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  // 使用本地状态来跟踪编辑中的内容，而不是直接使用content
  const [editingContent, setEditingContent] = useState(content.content)
  const [editingTitle, setEditingTitle] = useState(content.title)
  const formRef = useRef<HTMLFormElement>(null)

  // 当content变化时更新本地状态
  useEffect(() => {
    setEditingContent(content.content)
    setEditingTitle(content.title)
    setIsPreview(true)
  }, [content.id, content.content, content.title])

  const handleContentChange = (e) => {
    // 只更新本地状态，不提交表单
    setEditingContent(e.target.value)
  }

  const handleTitleChange = (e) => {
    // 只更新本地状态，不提交表单
    setEditingTitle(e.target.value)
  }

  const handleTogglePreview = () => {
    if (!isPreview) {
      // 从编辑模式切换到预览模式时提交表单
      if (formRef.current) {
        submit(formRef.current)
      }
    }
    setIsPreview(!isPreview)
  }

  const handleDelete = () => {
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    submit({ id: content.id, category_id: content.category_id }, { method: 'DELETE' })

    setShowDeleteConfirm(false)
  }

  const cancelDelete = () => {
    setShowDeleteConfirm(false)
  }

  return (
    <Form method="PUT" ref={formRef}>
      <main className="content-page" key={content.id}>
        <input type="text" name="id" defaultValue={content.id} hidden />
        <div className={`content-header ${!isPreview ? 'edit-mode' : ''}`}>
          {isPreview ? (
            <h1 className="content-title-preview" title={content.title}>
              {content.title}
            </h1>
          ) : (
            <input
              autoFocus
              name="title"
              value={editingTitle}
              onChange={handleTitleChange}
              className="content-title"
            />
          )}

          <select
            name="category_id"
            value={content.category_id}
            onChange={(e) => {
              // 分类变更时立即提交
              submit(e.target.form)
              setIsPreview(true)
            }}
            className="content-category"
          >
            <option value="0">未分类</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="markdown-container">
          <div className="markdown-toolbar">
            <button
              type="button"
              className={`preview-toggle ${isPreview ? 'active' : ''}`}
              onClick={handleTogglePreview}
            >
              {isPreview ? '编辑' : '完成'}
            </button>

            {/* 添加删除按钮 */}
            <button type="button" className="delete-button" onClick={handleDelete}>
              删除
            </button>

            {!isPreview && <div className="markdown-tools">{/* 工具栏内容 */}</div>}
          </div>

          {isPreview ? (
            <div className="markdown-preview">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{editingContent}</ReactMarkdown>
            </div>
          ) : (
            <textarea
              placeholder="请输入内容，支持 Markdown 格式……"
              name="content"
              value={editingContent}
              onChange={handleContentChange}
              className="markdown-editor"
            />
          )}
        </div>

        {/* 删除确认对话框 */}
        {showDeleteConfirm && (
          <div className="delete-confirm-overlay">
            <div className="delete-confirm-dialog">
              <p>确定要删除这篇内容吗？此操作不可撤销。</p>
              <div className="delete-confirm-buttons">
                <button type="button" onClick={cancelDelete}>
                  取消
                </button>
                <button type="button" onClick={confirmDelete} className="confirm-delete">
                  确认删除
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </Form>
  )
}
