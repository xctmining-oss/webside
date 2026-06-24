# Codex 新对话上下文摘要

把本文件提供给新的 Codex 对话，用于快速熟悉 `D:\agant\codex\company_web` 当前项目、协作边界和重要规则。

## 当前工作区

- 工作目录：`D:\agant\codex\company_web`
- 系统环境：Windows / PowerShell
- 项目类型：纯静态 HTML/CSS/JS 企业外贸网站，没有发现 `package.json` 或前端构建工具。
- 站点品牌：XCT Mining，即 Ma'anshan Xct Mining Engineering Machinery Technology Co., Ltd.
- 站点目标：面向海外采购商展示破碎机耐磨件与备件能力，并让采购商按机型、零件名、材质、参考号、图纸或应用场景发起 RFQ。
- 搜索目标：服务 Google、Yandex、Bing 和 AI 搜索理解。

## 最高优先级操作规则

- 修改前先运行 `git status --short --branch`，确认已有改动和未跟踪文件，避免覆盖用户内容。
- 禁止批量删除文件或目录。不要使用 `del /s`、`rd /s`、`rmdir /s`、`Move-Item -Recurse`、`rm -rf` 等批量/递归删除或移动操作。
- 如确需删除，只能一次删除一个明确路径的单个文件，例如 `Remove-Item "C:\path\to\file.txt"`。
- 如果任务需要批量删除，应停止并请求用户手动处理。
- 不要随意删除、移动或覆盖真实素材目录，尤其是 `public/` 和 `assets/generated/` 中可能被页面引用的图片、视频和导出素材。
- Windows PowerShell 编码可能误显示乱码；读取中文或 `AGENTS.md` 时优先显式使用 UTF-8，不要仅凭控制台乱码判断文件损坏。

## 当前仓库状态提醒

最近检查到：

- 分支：`main...origin/main`
- `AGENTS.md` 已有修改。
- 存在未跟踪的画册导出文件和 `tools/` 目录。

后续 Codex 不应把这些已有改动当作自己造成的改动，也不应在无明确要求时删除、提交或覆盖它们。

## 业务信息

- 公司名称：Ma'anshan Xct Mining Engineering Machinery Technology Co., Ltd.
- 品牌：XCT Mining
- 成立时间：2013-01-06
- 地址：No. 423 Yinxing Avenue, Cihu High-Tech Zone, Ma'anshan, Anhui, China
- 业务类型：破碎机售后耐磨件、备件制造商与贸易公司
- 公开信任信息：ISO 9001 / ISO 14001 / ISO 45001，工厂面积约 11,574 平方米，MOQ 1 pc
- Email：`leon@xctmining.com`
- WhatsApp：`+86 13013110975`

## 产品范围

重点产品包括：

- 圆锥破碎机衬板：mantle、bowl liner、concave，材质覆盖 Mn13、Mn18、Mn22 等高锰钢。
- 铜套与铜件：eccentric bushing、socket liner、frame bushing、countershaft bushing、main shaft sleeve。
- 锁紧螺母与机械备件：lock nut、mantle nut、torch ring、feed cone、retaining hardware。
- 圆锥破碎机偏心配重与铸钢件。
- 液压安全联轴器与破碎机保护组件。
- 颚板、护板、VSI rotor tip、Barmac-style rotor parts、筛条。
- 可按图纸、样品、旧件照片做定制和反向测绘。

## 商标与合规口径

这是独立售后替换件网站。Metso、Nordberg、Sandvik、Barmac 等品牌名只能用于说明适配机型或替换应用。

禁止写成：

- 原厂
- 授权代理
- 官方经销商
- 与品牌方有关联

除非用户明确提供正式授权文件。新增页面应保留类似口径：

- independent aftermarket supplier
- replacement parts
- compatible with / used to identify machine compatibility only
- trademarks belong to their respective owners

## 页面结构

主入口：

- `index.html`：英文首页，主 SEO 页面，包含结构化数据、产品网格、机型筛选、质量流程、采购证明、工程指南、FAQ 和询盘表单。
- `zh.html`：中文首页，当前带 `noindex,nofollow`。
- `ru.html`：俄语首页，已有 canonical 与 hreflang。
- `es.html`：西语首页，已有 canonical 与 hreflang。

英文产品详情页：

- `en-cone-crusher-liners.html`
- `en-bronze-bushings.html`
- `en-lock-nuts.html`
- `en-counterweights.html`
- `en-hydraulic-safety-couplings.html`
- `en-jaw-vsi-parts.html`

系列、机型与采购入口页：

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

工程指南页：

- 英文指南页包括 `guide-manganese-liner-materials.html`、`guide-hp300-liner-rfq.html`、`guide-eccentric-bushing-wear.html`、`weekly-cone-crusher-wear-parts-rfq-guide.html`、`cone-crusher-eccentric-bushing-lubrication-checks.html`。
- 俄语和西语指南页使用 `ru-`、`es-` 前缀。
- 中文指南页使用 `zh-` 前缀，并默认保持 `noindex,nofollow`。

产品画册页：

- `liner-product-brochure.html`
- `liner-product-brochure-en.html`
- `counterweight-product-brochure.html`

画册页和根目录画册图片/PDF 多用于内部展示或分享。若带 `noindex,nofollow`，不要误改成可索引页面，除非用户明确要求。

## SEO 与 AI 文件

- `robots.txt`：允许抓取，并指向线上 sitemap。
- `sitemap.xml`：列出英文首页、俄语/西语页、英文产品页和指南页。
- `llms.txt`：面向 AI 搜索的公司与产品摘要。
- `ai.txt`：更短的 AI/爬虫说明。
- `_redirects`：将 `/AGENTS.md`、`/seo-action-plan.zh-CN.md`、`/supabase/*` 返回 404，避免内部说明和后端配置路径公开。
- `seo-action-plan.zh-CN.md` 当前显示为乱码，修改前要确认编码或从原始资料恢复，不要直接复制乱码内容到页面。

正式新增或改动可索引英文页面时，应同步检查：

- 首页内链
- 相关语言入口
- canonical / hreflang / robots
- `sitemap.xml`
- `llms.txt`
- `ai.txt`
- 商标兼容性声明

## 多语言同步规则

- 每次更新正式页面内容后，更新内容要同步到各个语言版本页面中；至少检查并同步英文、中文、俄语、西语相关页面，不能只改单一语言后结束。
- 英文首页或英文可索引页面新增结构、产品图库、型号/系列入口、质量入口、RFQ 入口、导航或底部链接时，需要同步检查 `zh.html`、`ru.html`、`es.html`。
- `zh.html` 和中文详情页默认保持 `noindex,nofollow`，除非用户明确要求中文站参与索引。
- 涉及商标或适配机型的多语言文案，必须继续使用 independent aftermarket / replacement parts / compatible with 的合规口径。
- 周文章流程默认先出中文审阅稿，等待用户明确批准后再翻译、发布多语言页面、同步首页入口、更新 `sitemap.xml`、`llms.txt`、`ai.txt`，以及执行 Git/GitHub 操作。

## 前端实现约定

- 全站主要样式在 `styles.css`。
- 交互脚本在 `script.js`。
- 无框架依赖。
- 页面风格是工业 B2B，避免营销式浮夸视觉。
- 主要 CSS 变量：`--ink`、`--muted`、`--line`、`--paper`、`--white`、`--steel`、`--orange`、`--yellow`、`--green`。
- 常见组件类名：`.site-header`、`.hero`、`.trust-strip`、`.section`、`.product-grid`、`.product-card`、`.part-finder`、`.finder-result`、`.detail-media`、`.detail-gallery`、`.quote-section`、`.sticky-rfq`、`.footer`。
- 响应式断点主要是 `920px` 和 `600px`。

## JavaScript 与 RFQ 行为

`script.js` 负责：

- 根据询盘表单内容动态生成 `mailto:` 链接。
- 根据询盘表单内容动态生成 WhatsApp RFQ 链接。
- 当 `window.XCT_RFQ_ENDPOINT` 或表单 `data-rfq-endpoint` 配置为真实 Supabase Function URL 时，提交 RFQ JSON 到后端。
- 若 endpoint 未配置或仍含 `YOUR_PROJECT_REF`，回退到 `mailto:`。
- 支持复制 RFQ 文本到剪贴板。
- 首页产品查找器按搜索词过滤 `.finder-result`。
- 快捷搜索按钮通过 `data-search` 填充搜索框并触发过滤。
- 表单内有 `Website` 蜜罐字段 `.hp-field`，用于过滤机器人提交。

新增或改动询盘字段时，必须同步检查：

- `buildRfqText()`
- `updateRfqLinks()`
- 表单字段名
- Supabase Function payload
- 数据库字段
- 静态表单 fallback
- 邮件通知逻辑

## Supabase RFQ 后端

可选后端位于 `supabase/functions/submit-rfq/`：

- `index.ts`：Supabase Edge Function，接收 POST JSON，清洗字段，写入 `public.rfq_requests`，并可通过 Resend 发送邮件通知。
- `README.md`：记录所需 secrets，包括 `SUPABASE_SERVICE_ROLE_KEY`、`RESEND_API_KEY`、`RFQ_TO_EMAIL`、`RFQ_FROM_EMAIL`。
- `supabase/migrations/20260520000000_create_rfq_requests.sql`：创建 `rfq_requests` 表、RLS、`created_at` 和 `status` 索引。

当前 `index.html`、`zh.html`、`ru.html`、`es.html` 的询盘表单包含 `data-rfq-endpoint`。修改 endpoint、字段、必填逻辑或防垃圾提交逻辑时，需要同时验证静态页面和后端路径。

## 素材与工具

重要素材目录：

- `assets/crusher-parts-hero.png`：首页及多语言首页共用首屏图。
- `assets/generated/`：生成后的产品范围图、白底产品图、知识库图片和最终导出图。
- `public/公司资料/`：公司 logo、航拍图、认证证书等公司资料。
- `public/高锰合金耐磨件/`：高锰钢耐磨件图片和视频。
- `public/缸套/`：钢套、偏心套、主轴衬套、偏心铜套等图片。
- `public/球面瓦/`：铜件、球面瓦架等图片。
- `public/配重/`：偏心配重、锁紧螺母、配重等图片。
- `public/液压安全联轴器/`：液压安全联轴器原图和 WPS 批量处理后的压缩图。

工具脚本：

- `tools/make_candidate_sheet.py`
- `tools/create_cutout_white_gallery.py`
- `tools/split_generated_white_gallery.py`

这些脚本依赖 Python、Pillow、NumPy。运行前确认依赖和输入路径。生成图片会写入 `assets/generated/`，不要覆盖正在被页面引用的图片，除非已确认替换关系。

## 本地验证

静态页面通常可以直接打开 HTML 文件验证。常用入口：

- `D:\agant\codex\company_web\index.html`
- `D:\agant\codex\company_web\zh.html`
- `D:\agant\codex\company_web\ru.html`
- `D:\agant\codex\company_web\es.html`

修改页面后至少检查：

- 桌面和手机宽度下首屏、导航、询盘表单、底部固定 RFQ 条是否正常。
- 图片路径是否加载，尤其是 `public/` 下含中文目录的路径。
- `mailto:`、WhatsApp 链接和复制 RFQ 是否仍可用。
- 如果配置了 `data-rfq-endpoint`，表单提交失败时是否能显示 fallback 提示，不影响 Email/WhatsApp RFQ。
- canonical、hreflang、robots、sitemap 是否和页面索引策略一致。

## 内容写作原则

- 用采购员语言写清楚：是什么零件、适配哪些机型、常见材质、生产/检测点、询价需要什么信息。
- 不要堆砌关键词。
- 英文页面优先承接海外搜索词，例如 `crusher wear parts`、`crusher spare parts`、`cone crusher liners`、`bronze bushings`、`lock nuts`、`counterweights`、`hydraulic safety couplings`、`HP300`、`CH440`。
- 产品页应包含明确 RFQ 信息要求：机型、零件名或参考号、图纸/照片、材质、数量、目的国/目的港、交期。
- 图片文件名和 alt 文本尽量使用可理解的产品词；现有中文路径可以继续使用，但新增面向 SEO 的图片建议采用英文描述性文件名。
- 不要新增虚假证书、虚假案例、虚假客户 logo。

## 协作偏好

- 用户偏好中文沟通。
- 对配置变更、发布、协作文档编辑，通常先解释原因和候选修改，等用户确认后再执行。
- 调试或审阅时要看真实文件，报告具体原因，不要泛泛建议。
- 生成或修改技术产物后，用简洁中文总结目的、变更范围和验证结果。
- 每次对网页内容、样式、脚本、SEO 文件、多语言内容、RFQ 表单或素材引用做出修改后，必须先整理本次修改内容并向用户汇报，包括改了哪些文件、改动目的、是否已同步各语言页面、以及本地验证结果。
- 用户明确同意发布或上传后，Codex 应继续自动执行 GitHub 上传流程，以便在 web 上同步网页；上传前再次检查 `git status --short --branch`，只暂存和提交本次相关文件。
- 不要发布、推送、提交或同步多语言页面，除非用户明确批准；一旦用户明确批准，则按上述流程继续完成 GitHub 上传。

## 给新 Codex 的建议启动步骤

1. 先运行 `git status --short --branch`。
2. 用 UTF-8 读取 `AGENTS.md`，确认当前项目规则是否比本摘要更新。
3. 明确用户当前任务属于：内容草稿、页面修改、RFQ/后端、SEO/索引、多语言同步、素材生成、还是发布/Git 操作。
4. 只处理用户要求的范围，保留已有未跟踪素材和用户改动。
5. 如果任务涉及正式可索引页面或发布链路，同步检查 `sitemap.xml`、`llms.txt`、`ai.txt`、首页内链和多语言入口。
