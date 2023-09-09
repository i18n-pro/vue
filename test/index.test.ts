import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Component from './App.vue'
import { createI18n } from '../src/index'

it.each([true, false])('with$ = %s : full test', async (with$) => {
  const i18n = createI18n({
    namespace: 'test' + with$,
    langs: {
      en: {
        你好世界: 'Hello World',
      },
    },
    with$,
  })
  const i18n2 = createI18n({
    namespace: 'test' + with$,
    langs: {
      en: {
        你好世界: 'Hello World',
      },
    },
    with$,
  })
  const { container } = render(Component, {
    global: {
      plugins: [i18n, i18n2],
    },
    props: {
      with$,
    },
  })

  const textWrapper = container.querySelector('#text') as HTMLDivElement

  const zhBtn = container.querySelector('#zhBtn') as Element
  const enBtn = container.querySelector('#enBtn') as Element
  const unknownBtn = container.querySelector('#unknownBtn') as Element
  const jpBtn = container.querySelector('#jpBtn') as Element
  const localeDiv = container.querySelector('#locale') as Element
  const localeDiv2 = container.querySelector('#locale2') as Element

  expect(textWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('')
  expect(localeDiv2).toHaveTextContent('')

  await fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')
  expect(localeDiv2).toHaveTextContent('en')

  await fireEvent.click(zhBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('zh')
  expect(localeDiv2).toHaveTextContent('zh')

  await fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')
  expect(localeDiv2).toHaveTextContent('en')

  await fireEvent.click(unknownBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('')
  expect(localeDiv2).toHaveTextContent('')

  await fireEvent.click(jpBtn)
  expect(textWrapper).toHaveTextContent('こんにちは、世界')
  expect(localeDiv).toHaveTextContent('jp')
  expect(localeDiv2).toHaveTextContent('jp')
})
