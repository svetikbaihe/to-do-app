import type React from "react"
import cn from "classnames"
import { Tabs, ConfigProvider } from "antd"
import { themeTabsDark, themeTabsLight } from "@theme/theme"
import useContainer from "./hook"
import { items } from "./constants"
import styles from "./styles.module.scss"

const TodoTabs: React.FC = () => {

  const { isDark, handleActiveTab } = useContainer()

  return (
    <ConfigProvider theme={ isDark ? themeTabsDark : themeTabsLight}>
      <Tabs
        items={items}
        defaultActiveKey="1"
        centered
        size="large"
        indicator={{ size: 0 }}
        className={cn(styles.tabsLight, {
          [styles.tabsDark]: isDark,
        })}
        onChange={handleActiveTab}
      />
    </ConfigProvider>
  )
}

export default TodoTabs
