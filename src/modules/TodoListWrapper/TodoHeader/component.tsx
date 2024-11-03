import React from "react"
import IconMoon from "@assets/icons/icon-moon.svg?react"
import IconSun from "@assets/icons/icon-sun.svg?react"
import { Button, Flex, Typography, ConfigProvider } from "antd"
import { themeBtnLight, themeHeading1 } from "@theme/theme"
import useContainer from "../hook"
import styles from "./styles.module.scss"

const { Title } = Typography

const TodoHeader: React.FC = () => {
  const { isDark, handleToggle } = useContainer()

  return (
    <Flex justify="space-between" className={styles.toggleTitleWrapper}>
      <ConfigProvider theme={themeHeading1}>
        <Title level={1} className={styles.todoListWrapperTitle}>
          TODO
        </Title>
      </ConfigProvider>
      <ConfigProvider theme={themeBtnLight} wave={{ disabled: true }}>
        <Button
          icon={
            isDark ? (
              <IconSun className={styles.switchBtn} />
            ) : (
              <IconMoon className={styles.switchBtn} />
            )
          }
          type="default"
          onClick={handleToggle}
        />
      </ConfigProvider>
    </Flex>
  )
}

export default TodoHeader
