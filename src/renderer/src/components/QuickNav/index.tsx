import { NavLink } from 'react-router-dom'
import { AllApplication } from '@icon-park/react'

export const QuickNav = () => {
  return (
    <>
      <div className="px-2 mt-2 opacity-90 mb-1">快捷操作</div>
      <NavLink to={`/config/category/contentList`} end className="font-bold">
        <div className="flex item-center gap-1">
          <AllApplication theme="outline" size="12" />
          <div className="truncate">所有片段</div>
        </div>
      </NavLink>
      <NavLink to={`/config/category/contentList/0`} end className="font-bold">
        <div className="flex item-center gap-1">
          <AllApplication theme="outline" size="12" />
          <div className="truncate">未分类</div>
        </div>
      </NavLink>
    </>
  )
}
