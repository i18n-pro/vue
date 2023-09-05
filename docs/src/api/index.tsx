import { H1, render, TableOfContents, List } from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import SpecialStatement from '../components/SpecialStatement'
import { Package } from '../types'
import { getCreateI18nDesc, getI18nProDocHref, initI18n } from '../utils'
import FunctionTemplate from './FunctionTemplate'

type I18nProProps = {
  i18nProPkg: Package
}

function getTitleToA(i18nProPkg: Package, title: string, showTitle?: string) {
  return render(
    <a href={getI18nProDocHref(i18nProPkg, 'API', title)}>
      {showTitle || title}
    </a>,
  )
}

function CreateI18n(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="createI18n"
        description={
          <>
            {getCreateI18nDesc()}
            <br />
            {t(
              '会在 Vue 的全局属性上注册如下 3 个属性，它们各自的类型及使用说明可点击链接查看',
            )}
            <List
              items={[
                'U',
                getTitleToA(i18nProPkg, 't', '$t'),
                getTitleToA(i18nProPkg, 'setI18n', '$setI18n'),
                getTitleToA(i18nProPkg, 'i18nState', '$i18nState'),
              ]}
            />
          </>
        }
        type={`(
  props: ${getTitleToA(i18nProPkg, 'I18nState')} & { with$?: boolean },
) => (app: App) => void`}
        propsDesc={
          <>
            {t(
              '其他属性与{0}参数一致',
              ` ${render(
                <a href={getI18nProDocHref(i18nProPkg, 'API', 'initI18n')}>
                  initI18n
                </a>,
              )} `,
            )}
          </>
        }
        props={{
          with$: (
            <>
              {t('注册的全局属性，使用时是否需要带前缀{0}', '$')}
              <br />
              <br />
              {t(
                '默认为 true，只能通过{0}来访问属性；若配置为 false，则可以直接通过{1}来访问属性',
                ` ${render(
                  <>
                    <code>$t</code>, <code>$setI18n</code>,{' '}
                    <code>$i18nState</code>
                  </>,
                )} `,
                ` ${render(
                  <>
                    <code>t</code>, <code>setI18n</code>, <code>i18nState</code>
                  </>,
                )} `,
              )}
            </>
          ),
        }}
      />
    </>
  )
}

export default function API(props) {
  initI18n(props)

  return (
    <I18nProWrapper>
      {(i18nProPkg) => (
        <>
          <H1 skip>{t('API')}</H1>
          <SpecialStatement i18nProPkg={i18nProPkg} />
          <TableOfContents text={t('目录')} open={false} />
          <CreateI18n i18nProPkg={i18nProPkg} />
        </>
      )}
    </I18nProWrapper>
  )
}
