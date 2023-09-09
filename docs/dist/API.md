
# API

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.0.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[createI18n](#createi18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#createi18n-type)<br/>
  &emsp;&emsp;&emsp;&emsp;[Parameter Description](#createi18n-parameter-description)<br/>
  &emsp;&emsp;[useI18n](#usei18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#usei18n-type)<br/>

</details>

## createI18n
Initialize internationalization state and return its plugin function<br />It will register the following 3 properties on Vue's global properties. You can click on the links to view their respective types and usage instructions
* <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#t">$t</a>
* <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#seti18n">$setI18n</a>
* <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#i18nstate">$i18nState</a>


<h3 id="createi18n-type">Type</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#i18nstate">I18nState</a> & { with$?: boolean },
) => (app: App) => void
</pre>

<h3 id="createi18n-parameter-description">Parameter Description</h3>
The other parameters are consistent with the  <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#initi18n">initI18n</a>  parameters<table>
  <tr>
    <th>Parameter name</th>
    <th>Description</th>
  </tr>
  <tr>
    <tr>
      <td>with$</td>
      <td>
        Registered global properties, do you need to bring prefix $ when used<br /><br />The default is TRUE, you can only access the properties through  <code>$t</code>, <code>$setI18n</code>, <code>$i18nState</code> ; if configured to false, you can directly access the properties through  <code>t</code>, <code>setI18n</code>, <code>i18nState</code> <br />After configuring this property, it will take effect for both  <code>Options API</code>  and  <code>Composition API</code> 
      </td>
    </tr>
  </tr>
</table>

## useI18n
Method to get internationalization state and API in  `Composition API` 
<h3 id="usei18n-type">Type</h3>
<pre>
() => ({
  <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#t">$t</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#seti18n">$setI18n</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/API.md#i18nstate">$i18nState</a>,
})
</pre>

