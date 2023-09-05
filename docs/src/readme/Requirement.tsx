import { H1, List } from 'jsx-to-md'

export default function Requirement() {
  return (
    <>
      <H1>{t('要求')}</H1>
      <List items={['U', 'vue >= **3.2.25**', 'i18n-pro >= **2.0.0**']} />
    </>
  )
}
