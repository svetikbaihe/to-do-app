import { ThemeConfig } from "antd"

export const themeBase: ThemeConfig = {
  token: {
    fontFamily: "Josefin Sans, sans-serif",
  }
} 

export const themeHeading1: ThemeConfig = {
  token: {
    colorText: 'var(--color-lt-very-light-grayish-blue)',
  },
  components: {
    Typography: {
      fontSizeHeading1: 26,
    }
  }
}

export const themeTabsLight: ThemeConfig = {
  token: {
    colorBorderSecondary: 'none',
    margin: 0,
    fontSize: 13,
    colorText: 'var(--color-lt-dark-grayish-blue)'
  },
  components: {
    Tabs: {
      itemHoverColor: 'var(--color-dt-very-dark-grayish-blue)', 
    }
  }
}

export const themeTabsDark: ThemeConfig = {
  token: {
    colorBorderSecondary: 'none',
    margin: 0,
    fontSize: 13,
    colorText: 'var(--color-dt-very-dark-grayish-blue)'
  },
  components: {
    Tabs: {
      itemHoverColor: 'var(--color-lt-light-grayish-blue)',
    }
  }
}

export const themeBtnDark: ThemeConfig = {
  components: {
    Button: {
      defaultHoverBg: 'none',
      colorBgContainer: 'none',
      defaultBorderColor: 'none',
      defaultHoverBorderColor: 'none',
      defaultActiveBorderColor: 'none',
      defaultShadow: 'none',
      defaultHoverColor: 'var(--color-dt-light-grayish-blue-hover)'
    }
  }
}

export const themeBtnLight: ThemeConfig = {
  components: {
    Button: {
      defaultHoverBg: 'none',
      colorBgContainer: 'none',
      defaultBorderColor: 'none',
      defaultHoverBorderColor: 'none',
      defaultActiveBorderColor: 'none',
      defaultShadow: 'none',
      defaultHoverColor: 'var(--color-lt-very-dark-grayish-blue)'
    }
  }
}