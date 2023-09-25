import { H1, TableOfContents } from 'jsx-to-md'
import { initI18n, renderLanguage } from '../utils'
import Template from './ChangeLog'

function V_1_0_0() {
  return (
    <Template
      version="1.0.0"
      date="2023-09-09"
      api={{
        added: [
          'U',
          t('新增{0}和{1}基础实现', ' `createI18n` ', ' `useI18n` '),
        ],
      }}
    />
  )
}
function V_1_1_0() {
  return (
    <Template
      version="1.1.0"
      date="2023-09-25"
      api={{
        added: [
          'U',
          [
            t('调整{0}返回的属性名', ' `useI18n` '),
            [
              'U',
              ' `$t` -> `t` ',
              ' `$setI18n` -> `setI18n` ',
              ' `$i18nState` -> `i18nState` ',
            ],
          ],
        ],
      }}
    />
  )
}

export default function ChangeLog(props) {
  initI18n(props)

  return (
    <>
      <H1 skip>{t('更新日志')}</H1>
      {renderLanguage('CHANGELOG')}
      <TableOfContents text={t('目录')} open={false} />
      <V_1_1_0 />
      <V_1_0_0 />
    </>
  )
}
