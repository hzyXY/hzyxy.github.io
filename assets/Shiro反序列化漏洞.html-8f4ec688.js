import{_ as e,W as i,X as a,a1 as r}from"./framework-b6a07282.js";const h="/assets/1-561f5b3f.jpg",o="/assets/2-aaf13874.jpg",l={},d=r('<h2 id="shiro反序列化漏洞" tabindex="-1"><a class="header-anchor" href="#shiro反序列化漏洞" aria-hidden="true">#</a> Shiro反序列化漏洞</h2><h3 id="什么是shiro及该漏洞" tabindex="-1"><a class="header-anchor" href="#什么是shiro及该漏洞" aria-hidden="true">#</a> 什么是Shiro及该漏洞？</h3><ul><li>Apache Shiro是一个强大而易用的Java安全框架，它可以执行认证、授权、加密和会话管理等功能。</li><li>Shiro反序列化漏洞是指Apache Shiro的一些版本上存在一些高危代码执行漏洞，利用者可以通过构造恶意的RememberMe字段，发送给服务器，从而触发反序列化漏洞，执行任意代码。</li></ul><p>Shiro反序列化漏洞主要有两种类型：Shiro-550和Shiro-721。</p><h3 id="判断网站是否使用了shiro框架" tabindex="-1"><a class="header-anchor" href="#判断网站是否使用了shiro框架" aria-hidden="true">#</a> 判断网站是否使用了shiro框架</h3><p>有一些方法可以观察网站是否使用了Shiro框架，如：</p><ul><li>查看网站的响应头，如果有<code>Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Mon, 25-Dec-2017 09:18:31 GMT</code>或类似的字段，说明可能使用了Shiro框架。</li><li>查看网站的源码或jar包，如果有<code>org.apache.shiro</code>或<code>shiro.ini</code>等相关的类或配置文件，说明可能使用了Shiro框架。</li><li>使用工具或插件批量检测网站是否使用Shiro框架，例如Ladon插件⁴。</li></ul><h3 id="shiro-550-cve-2016-4437" tabindex="-1"><a class="header-anchor" href="#shiro-550-cve-2016-4437" aria-hidden="true">#</a> Shiro-550(CVE-2016-4437)</h3><h4 id="_1-该漏洞是什么" tabindex="-1"><a class="header-anchor" href="#_1-该漏洞是什么" aria-hidden="true">#</a> 1.该漏洞是什么？</h4><ul><li>Shiro-550漏洞是一个Java安全框架Apache Shiro的反序列化漏洞。</li></ul><h4 id="_2-漏洞的发生原因是什么" tabindex="-1"><a class="header-anchor" href="#_2-漏洞的发生原因是什么" aria-hidden="true">#</a> 2.漏洞的发生原因是什么？</h4><ul><li>Shiro-550是指Shiro版本&lt;=1.2.4时，Shiro框架中使用了硬编码的AES加密密钥来处理rememberMe（记住我）功能的cookie值，它对于cookie的处理流程是，首先获取rememberMe的cookie值，然后进行Base64解码，再进行AES解密，最后反序列化。如果利用者能够获取到AES密钥或者猜测出AES密钥，则可以构造恶意的cookie值来触发反序列化RCE漏洞。</li></ul><p>加密：序列化字节数组→AES密钥加密→Base64编码→得到cookie值</p><p>解密：cookie值→Base64解码→AES密钥解密→反序列化字节数组</p><h4 id="_3-如何检测是否存在这个漏洞" tabindex="-1"><a class="header-anchor" href="#_3-如何检测是否存在这个漏洞" aria-hidden="true">#</a> 3.如何检测是否存在这个漏洞？</h4><ul><li>使用shiro反序列化漏洞工具，通过输入url，这些工具可以自动遍历常见的AES密钥和反序列化利用连，然后发送带有伪造的rememberMe cookie值的请求继续检测。</li></ul><h4 id="_4-该漏洞会造成什么危害" tabindex="-1"><a class="header-anchor" href="#_4-该漏洞会造成什么危害" aria-hidden="true">#</a> 4.该漏洞会造成什么危害？</h4><ul><li>远程代码执行（RCE）</li></ul><h4 id="_5-如何利用这个漏洞" tabindex="-1"><a class="header-anchor" href="#_5-如何利用这个漏洞" aria-hidden="true">#</a> 5.如何利用这个漏洞？</h4><ul><li>要利用这个漏洞，需要知道AES密钥，然后构造一个包含恶意代码的Java对象，对其进行序列化、加密和编码，生成一个新的cookie值。然后将这个cookie值发送给目标服务器，服务器会对其进行解码、解密和反序列化，执行恶意代码。</li></ul><h5 id="手动利用" tabindex="-1"><a class="header-anchor" href="#手动利用" aria-hidden="true">#</a> 手动利用</h5><ol><li>选择一个反序列化利用链，例如CommonsCollections2或CommonsCollections4，将您想要执行的命令作为参数传入。</li><li>使用Java序列化库，如ysoserial或marshalsec，将利用链对象序列化为字节数组。</li><li>使用已知或猜测的AES密钥，对字节数组进行AES加密。</li><li>对加密后的字节数组进行Base64编码，得到cookie值。</li><li>将cookie值放入请求头中的rememberMe字段，发送给目标网站。</li></ol><h5 id="使用工具利用" tabindex="-1"><a class="header-anchor" href="#使用工具利用" aria-hidden="true">#</a> 使用工具利用</h5><ul><li>shiro_attack-2.2.jar 运行环境：java1.8</li></ul><table><thead><tr><th>描述</th><th>图片显示</th></tr></thead><tbody><tr><td>首先点及爆破密钥，将密钥枚举出来，有了密钥后点击爆破利用链及回显。当日志下面实现请尝试进行功能区利用即成功。</td><td><img src="'+h+'" style="zoom:67%;"></td></tr><tr><td>在命令执行区可执行任意命令</td><td><img src="'+o+'" style="zoom:67%;"></td></tr></tbody></table><h4 id="_6-如何修复-防御这个漏洞" tabindex="-1"><a class="header-anchor" href="#_6-如何修复-防御这个漏洞" aria-hidden="true">#</a> 6.如何修复/防御这个漏洞？</h4><ol><li>升级shiro框架到1.2.4以上的版本，或者使用其他安全框架替代shiro。</li><li>修改源码中的AES密钥，使用随机生成的密钥代替硬编码的密钥。</li><li>禁用或限制rememberMe功能，或者使用其他方式实现记住用户身份的功能。 shiro配置文件中禁用rememberMe功能设置<code>securityManager.rememberMeManager = null</code></li><li>增加防火墙或WAF等安全设备，拦截恶意的请求和响应。</li></ol><h4 id="_7-在有防御措施的情况下-如何绕过防御" tabindex="-1"><a class="header-anchor" href="#_7-在有防御措施的情况下-如何绕过防御" aria-hidden="true">#</a> 7.在有防御措施的情况下，如何绕过防御？</h4><ul><li>暂缺</li></ul><h3 id="shiro-721-cve-2019-12422" tabindex="-1"><a class="header-anchor" href="#shiro-721-cve-2019-12422" aria-hidden="true">#</a> Shiro-721(CVE-2019-12422)</h3><h4 id="_1-该漏洞是什么-1" tabindex="-1"><a class="header-anchor" href="#_1-该漏洞是什么-1" aria-hidden="true">#</a> 1.该漏洞是什么？</h4><ul><li>Shiro-721漏洞是一个Java安全框架Apache Shiro的反序列化漏洞。</li></ul><h4 id="_2-漏洞的发生原因是什么-1" tabindex="-1"><a class="header-anchor" href="#_2-漏洞的发生原因是什么-1" aria-hidden="true">#</a> 2.漏洞的发生原因是什么？</h4><ul><li>Shiro-721是指Shiro版本1.2.5 &lt;= Shiro &lt; 1.4.2时，Shiro框架的remeberMe功能使用了AES-128-CBC加密，并且使用了固定的IV值。RememberMe功能会将用户的Cookie值序列化，然后进行AES加密，接着base64编码后存储在Cookie的rememberMe字段中。由于remeberMe功能使用了AES-128-CBC加密，这样会存在Padding Oracle Attack（填充预言攻击）的可能性，攻击者可以构造不同的rememberMe Cookie来观察服务器的反应（服务器会根据解密过程中的填充是否合法，来返回不同的错误信息或状态码），通过发送多个请求来猜出AES密钥并且不需要知道IV值，然后构造恶意cookie值来触发反序列化RCE漏洞。</li></ul><h4 id="_3-如何检测是否存在这个漏洞-1" tabindex="-1"><a class="header-anchor" href="#_3-如何检测是否存在这个漏洞-1" aria-hidden="true">#</a> 3.如何检测是否存在这个漏洞？</h4><ul><li>如果响应包中包含deleteMe的cookie，说明目标应用存在Shiro-721漏洞。</li><li>如果响应包中不包含deleteMe的cookie，说明目标应用没有开启rememberMe功能，或者已经修复了漏洞。</li></ul><p><code>Set-Cookie: rememberMe=deleteMe;</code></p><h4 id="_4-该漏洞会造成什么危害-1" tabindex="-1"><a class="header-anchor" href="#_4-该漏洞会造成什么危害-1" aria-hidden="true">#</a> 4.该漏洞会造成什么危害？</h4><ul><li>远程代码执行（RCE）</li></ul><h4 id="_5-如何利用这个漏洞-1" tabindex="-1"><a class="header-anchor" href="#_5-如何利用这个漏洞-1" aria-hidden="true">#</a> 5.如何利用这个漏洞？</h4><h5 id="使用工具利用-1" tabindex="-1"><a class="header-anchor" href="#使用工具利用-1" aria-hidden="true">#</a> 使用工具利用</h5><ul><li>暂缺</li></ul><h4 id="_6-如何修复-防御这个漏洞-1" tabindex="-1"><a class="header-anchor" href="#_6-如何修复-防御这个漏洞-1" aria-hidden="true">#</a> 6.如何修复/防御这个漏洞？</h4><ol><li>升级到Apache Shiro 1.4.2或更高版本</li><li>禁用RememberMe功能 shiro配置文件中禁用rememberMe功能设置<code>securityManager.rememberMeManager = null</code></li><li>修改默认的AES密钥</li><li>使用安全的序列化库，如Kryo或FST</li><li>增加防火墙或WAF等安全设备，拦截恶意的请求和响应。</li></ol><h4 id="_7-在有防御措施的情况下-如何绕过防御-1" tabindex="-1"><a class="header-anchor" href="#_7-在有防御措施的情况下-如何绕过防御-1" aria-hidden="true">#</a> 7.在有防御措施的情况下，如何绕过防御？</h4><ul><li>暂缺</li></ul>',46),t=[d];function c(s,n){return i(),a("div",null,t)}const _=e(l,[["render",c],["__file","Shiro反序列化漏洞.html.vue"]]);export{_ as default};
