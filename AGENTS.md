# AGENTS.md

## 项目概览

这是一个纯静态企业外贸网站，面向海外采购商展示 XCT Mining（Ma'anshan Xct Mining Engineering Machinery Technology Co., Ltd.）的破碎机耐磨件与备件能力。站点重点服务 Google、Yandex、Bing 和 AI 搜索理解，核心目标是让采购商能按机型、零件名、材质、参考号和应用场景发起 RFQ。

项目没有发现 `package.json` 或前端构建工具；页面可直接以静态 HTML 打开。当前目录是 git 仓库，修改前应先查看 `git status --short --branch`，避免覆盖用户已有改动或未跟踪素材。

## Codex 上下文读取要求

在修改网站页面、样式、脚本、SEO 文件、多语言内容、RFQ 表单、素材引用或发布相关文件前，Codex 必须先读取并遵守 `.codex/codex-context-summary.zh-CN.md`。该文件是给新对话使用的项目上下文摘要，包含本项目的协作边界、内容同步规则、删除禁令、SEO/RFQ 注意事项和验证清单。

如果 `.codex/codex-context-summary.zh-CN.md` 与本 `AGENTS.md` 有冲突，以本 `AGENTS.md` 和用户最新指令为准；如果该文件缺失，应先告知用户，再继续按本 `AGENTS.md` 执行。

## 网页修改后的汇报与发布流程

每次对网站页面、样式、脚本、SEO 文件、多语言内容、RFQ 表单或素材引用做出修改后，Codex 必须先整理本次修改内容并用中文向用户汇报，说明改了哪些文件、改动目的、是否已同步各语言页面、以及本地验证结果。

只有在用户明确表示同意发布或上传后，Codex 才能继续自动执行 GitHub 上传流程，以便在 web 上同步网页。上传前应再次检查 `git status --short --branch`，只暂存和提交本次相关文件，避免把无关未跟踪素材或用户已有改动混入提交。

## 业务定位

- 公司名称：Ma'anshan Xct Mining Engineering Machinery Technology Co., Ltd.
- 品牌名称：XCT Mining
- 成立时间：2013-01-06
- 地址：No. 423 Yinxing Avenue, Cihu High-Tech Zone, Ma'anshan, Anhui, China
- 业务类型：破碎机售后耐磨件、备件制造商与贸易公司
- 公开信任信息：ISO 9001 / ISO 14001 / ISO 45001，工厂面积约 11,574 平方米，MOQ 1 pc
- 主要联系信息：
  - Email：`leon@xctmining.com`
  - WhatsApp：`+86 13013110975`

## 产品范围

重点产品包括：

- 圆锥破碎机衬板：mantle、bowl liner、concave，材质覆盖 Mn13、Mn18、Mn22 等高锰钢
- 铜套与铜件：eccentric bushing、socket liner、frame bushing、countershaft bushing、main shaft sleeve
- 锁紧螺母与机械备件：lock nut、mantle nut、torch ring、feed cone、retaining hardware
- 圆锥破碎机偏心配重与铸钢件
- 液压安全联轴器与破碎机保护组件
- 颚板、护板、VSI rotor tip、Barmac-style rotor parts、筛条
- 可按图纸、样品、旧件照片做定制和反向测绘

## 商标与合规口径

这是独立售后替换件网站。Metso、Nordberg、Sandvik、Barmac 等品牌名只能用于说明适配机型或替换应用，不能写成原厂、授权代理、官方经销商或品牌关联方，除非用户明确提供正式授权文件。

所有新增页面都应保留类似口径：

- independent aftermarket supplier
- replacement parts
- compatible with / used to identify machine compatibility only
- trademarks belong to their respective owners

## 页面结构

### 主入口

- `index.html`：英文首页，当前主 SEO 页面；包含结构化数据、产品网格、机型筛选、质量流程、采购证明、工程指南、FAQ 和询盘表单。
- `zh.html`：中文首页，当前带 `noindex,nofollow`。
- `ru.html`：俄语首页，已设置 canonical 与 hreflang。
- `es.html`：西语首页，已设置 canonical 与 hreflang。

### 英文产品详情页

- `en-cone-crusher-liners.html`
- `en-bronze-bushings.html`
- `en-lock-nuts.html`
- `en-counterweights.html`
- `en-hydraulic-safety-couplings.html`
- `en-jaw-vsi-parts.html`

### 系列、机型与采购入口页

这些是当前可索引的英文 SEO 页面，用于承接系列、具体机型和参考号类搜索：

- `metso-hp-series-crusher-parts.html`
- `metso-gp-series-crusher-parts.html`
- `sandvik-ch-series-crusher-parts.html`
- `sandvik-cs-series-crusher-parts.html`
- `hp300-cone-crusher-parts.html`
- `hp500-cone-crusher-parts.html`
- `ch440-cone-crusher-parts.html`
- `c125-jaw-crusher-parts.html`
- `crusher-parts-by-reference-number.html`
- `quality-inspection.html`

### 中文产品详情页

这些页面均为 `zh-CN`，目前带 `noindex,nofollow`：

- `zh-cone-crusher-liners.html`
- `zh-bronze-bushings.html`
- `zh-lock-nuts.html`
- `zh-counterweights.html`
- `zh-hydraulic-safety-couplings.html`
- `zh-jaw-vsi-parts.html`

### 工程指南页

- `guide-manganese-liner-materials.html`
- `guide-hp300-liner-rfq.html`
- `guide-eccentric-bushing-wear.html`
- `weekly-cone-crusher-wear-parts-rfq-guide.html`
- `cone-crusher-eccentric-bushing-lubrication-checks.html`

俄语和西语指南页使用 `ru-`、`es-` 前缀；中文指南页使用 `zh-` 前缀且默认保持 `noindex,nofollow`。

### 产品画册页

- `liner-product-brochure.html`、`liner-product-brochure-en.html`：衬板产品画册。
- `counterweight-product-brochure.html`：配重产品画册。
- 根目录中的 `liner-product-brochure*.png/.pdf`、`counterweight-brochure-*.png` 是画册输出素材。

画册页当前主要用于内部展示或分享，带 `noindex,nofollow` 时不要误改成可索引页面，除非用户明确要求。

### 搜索与 AI 文件

- `robots.txt`：允许抓取，并指向线上 sitemap。
- `sitemap.xml`：列出英文首页、俄语/西语页、英文产品页和指南页。
- `llms.txt`：面向 AI 搜索的公司与产品摘要。
- `ai.txt`：更短的 AI/爬虫说明。
- `_redirects`：将 `/AGENTS.md`、`/seo-action-plan.zh-CN.md`、`/supabase/*` 返回 404，避免内部说明和后端配置路径被公开访问。
- `seo-action-plan.zh-CN.md`：SEO 行动计划，但当前文件内容显示为乱码，修改前应先确认编码或从原始资料恢复。

## 资源目录

- `assets/crusher-parts-hero.png`：首页及多语言首页共用的首屏图。
- `assets/generated/`：生成后的产品范围图、白底产品图、知识库图片和最终导出图；改动前先确认页面是否引用。
- `public/公司资料/`：公司 logo、航拍图、认证证书等公司资料。
- `public/高锰合金耐磨件/`：高锰钢耐磨件图片和视频，含衬板、板锤、锤头、对辊机、陶瓷钉细节图等。
- `public/缸套/`：钢套、偏心套、主轴衬套、偏心铜套等图片。
- `public/球面瓦/`：铜件、球面瓦架等图片。
- `public/配重/`：偏心配重、锁紧螺母、配重等图片。
- `public/液压安全联轴器/`：液压安全联轴器原图和 WPS 批量处理后的压缩图。

优先使用真实产品和工厂图片，不要新增虚假证书、虚假案例、虚假客户 logo。

## 前端实现约定

- 全站主要样式在 `styles.css`。
- 交互脚本在 `script.js`。
- 站点使用原生 HTML/CSS/JS，没有框架依赖。
- 页面布局偏工业 B2B，颜色变量定义在 `:root`：
  - `--ink`
  - `--muted`
  - `--line`
  - `--paper`
  - `--white`
  - `--steel`
  - `--orange`
  - `--yellow`
  - `--green`
- 主要组件类名：
  - `.site-header`
  - `.hero`
  - `.trust-strip`
  - `.section`
  - `.product-grid`
  - `.product-card`
  - `.part-finder`
  - `.finder-result`
  - `.detail-media`
  - `.detail-gallery`
  - `.quote-section`
  - `.sticky-rfq`
  - `.footer`
- 响应式断点主要是 `920px` 和 `600px`。

## JavaScript 行为

`script.js` 负责：

- 根据询盘表单内容动态生成 `mailto:` 链接。
- 根据询盘表单内容动态生成 WhatsApp RFQ 链接。
- 当 `window.XCT_RFQ_ENDPOINT` 或表单 `data-rfq-endpoint` 配置为真实 Supabase Function URL 时，提交 RFQ JSON 到后端；若未配置或仍含 `YOUR_PROJECT_REF`，则退回 `mailto:`。
- 支持复制 RFQ 文本到剪贴板。
- 首页产品查找器按搜索词过滤 `.finder-result`。
- 快捷搜索按钮通过 `data-search` 填充搜索框并触发过滤。
- 表单内有 `Website` 蜜罐字段（`.hp-field`），用于过滤机器人提交。

新增或改动询盘字段时，需要同步检查 `buildRfqText()`、`updateRfqLinks()`、表单字段名、Supabase Function payload 和数据库字段。

## Supabase RFQ 后端

`supabase/functions/submit-rfq/` 是可选 RFQ 后端：

- `index.ts`：Supabase Edge Function，接收 POST JSON，清洗字段，写入 `public.rfq_requests`，并可通过 Resend 发送邮件通知。
- `README.md`：记录所需 secrets：`SUPABASE_SERVICE_ROLE_KEY`、`RESEND_API_KEY`、`RFQ_TO_EMAIL`、`RFQ_FROM_EMAIL`，以及部署命令。
- `supabase/migrations/20260520000000_create_rfq_requests.sql`：创建 `rfq_requests` 表、RLS、`created_at` 和 `status` 索引。

当前 `index.html`、`zh.html`、`ru.html`、`es.html` 的询盘表单包含 `data-rfq-endpoint`。修改 endpoint、字段、必填逻辑或防垃圾提交逻辑时，需要同时验证静态表单 fallback、Supabase 写入和邮件通知。

## SEO 与结构化数据

- `index.html` 已包含 `Organization`、`WebSite`、`FAQPage` JSON-LD。
- 英文首页 canonical 是 `https://www.xctmining.com/`。
- 英文首页 hreflang 包含 `en`、`ru`、`es`、`x-default`。
- `ru.html` 和 `es.html` 有 canonical 与 hreflang。
- `zh.html` 和中文产品详情页目前是 `noindex,nofollow`，不要误删，除非明确要让中文页被索引。
- 首页有占位的 Yandex 验证码：`replace-with-yandex-webmaster-code`，上线时应替换为真实验证码。
- `sitemap.xml` 更新页面时要同步维护，尤其是新增英文 SEO 页面或改变 URL 后。
- 新增或改动正式可索引页面时，同时检查首页内链、相关语言入口、`llms.txt`、`ai.txt` 和 `_redirects` 是否需要同步。

## 多语言同步规则

- 英文首页或英文可索引页面新增结构、产品图库、型号/系列入口、质量入口、RFQ 入口、导航或底部链接时，需要同步检查并更新 `zh.html`、`ru.html`、`es.html`。
- `zh.html` 和中文详情页默认保持 `noindex,nofollow`，除非用户明确要求中文站参与索引。
- 新增正式可索引英文页面时，同步更新 `sitemap.xml`、首页内链、`llms.txt`/`ai.txt` 中必要摘要，并检查俄语、西语首页是否需要增加入口。
- 涉及商标或适配机型的多语言文案，必须继续使用 independent aftermarket / replacement parts / compatible with 的合规口径。

## 内容写作原则

- 用采购员语言写清楚：是什么零件、适配哪些机型、常见材质、生产/检测点、询价需要什么信息。
- 不要堆砌关键词。
- 英文页面优先承接海外搜索词，例如 `crusher wear parts`、`crusher spare parts`、`cone crusher liners`、`bronze bushings`、`lock nuts`、`counterweights`、`hydraulic safety couplings`、`HP300`、`CH440` 等。
- 产品页应包含明确 RFQ 信息要求：机型、零件名或参考号、图纸/照片、材质、数量、目的国/目的港、交期。
- 图片文件名和 alt 文本尽量使用可理解的产品词；现有中文路径可以继续使用，但新增面向 SEO 的图片建议采用英文描述性文件名。

## 本地查看与验证

因为是静态站，通常可以直接打开 HTML 文件验证：

- 首页：`D:\agant\codex\company_web\index.html`
- 中文页：`D:\agant\codex\company_web\zh.html`
- 俄语页：`D:\agant\codex\company_web\ru.html`
- 西语页：`D:\agant\codex\company_web\es.html`

修改页面后建议至少检查：

- 桌面和手机宽度下首屏、导航、询盘表单、底部固定 RFQ 条是否正常。
- 图片路径是否能加载，尤其是 `public/` 下含中文目录的路径。
- `mailto:`、WhatsApp 链接和复制 RFQ 是否仍可用。
- 若页面配置了 `data-rfq-endpoint`，需要验证表单提交失败时能显示 fallback 提示，不影响 Email/WhatsApp RFQ。
- canonical、hreflang、robots、sitemap 是否和页面索引策略一致。

## 工具与生成素材

- `tools/make_candidate_sheet.py`：从真实产品素材生成候选图联系表。
- `tools/create_cutout_white_gallery.py`：从 `assets/generated/product-scope-white/` 生成白底产品图。
- `tools/split_generated_white_gallery.py`：从一次生成的大图拆分多个白底产品图，包含一个本机生成图片路径，换机器运行前要先检查路径是否存在。

这些脚本依赖 Python、Pillow、NumPy；运行前确认依赖和输入路径。生成图片会写入 `assets/generated/`，不要覆盖正在被页面引用的图片，除非已确认替换关系。

## 重要注意事项

- 当前 `AGENTS.md` 是根据现有文件夹内容整理，未访问外部资料核验公司信息。
- `AGENTS.md` 使用 UTF-8 编码；旧版 Windows PowerShell 默认读取可能显示乱码，读取或写入时应显式使用 UTF-8。
- `seo-action-plan.zh-CN.md` 显示乱码，说明可能存在编码问题；不要基于乱码内容直接复制到页面。
- `public/` 内有大量大体积图片和视频，新增引用时优先选压缩后的 `WPS图片批量处理` 版本，避免页面过重。
- 不要随意删除真实素材目录；很多页面直接引用这些中文路径。
- 若新增正式可索引页面，记得同步补充 `sitemap.xml`、必要的 internal links、meta description 和商标兼容性声明。
- 当前工作区可能存在未跟踪的画册导出文件和 `tools/` 目录；除非用户明确要求，不要删除、移动或覆盖这些文件。
