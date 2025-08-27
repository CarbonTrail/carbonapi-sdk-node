# Changelog

## 0.1.0-alpha.9 (2025-08-27)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** api update ([9f76845](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9f768450f285e8490e600d50beb61b917e4dcdf2))
* **client:** add support for endpoint-specific base URLs ([4fd8e0c](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/4fd8e0c4508d55a733f2265236bf6328ca84a8d9))
* **mcp:** implement support for binary responses ([d4569f2](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/d4569f2fc0cb8a7e04119090b9be197bf5976653))
* **mcp:** include http information in tools ([040e088](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/040e0881fb78aadaef39ad634d3661b8923711b0))
* **mcp:** set X-Stainless-MCP header ([210d978](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/210d978eff9b3c221dec38486831f79bcec6ef86))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([a09f7a7](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a09f7a79d9c9f3e3ec1af32a08614949bbc65b5b))
* more gracefully handle $refs and work around schema limitations ([7fc3c18](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/7fc3c18fce30b3533a13d0db31a2e67704ce64c8))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([ffded8c](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ffded8c99b8d43fcb8e593a1516ac55a5a2377d8))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([7192f23](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/7192f230ccf7ba0d145ecdc39458c8d354df10f8))
* **mcp:** fix cursor schema transformation issue with recursive references ([a100a0a](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a100a0a09795121f0044ba436cfd6c44f56efe78))
* **mcp:** include description in dynamic tool search ([9641295](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9641295c339c04ec9e3798429fab2a44590e41a8))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([12653fd](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/12653fd2592d0592f960e46012ea9ea71872b35a))
* publish script — handle NPM errors correctly ([bf54e9b](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/bf54e9b835a9f14aa573d870343a17ebf7166d8e))


### Chores

* **build:** automatically build subpackages if present ([552fb06](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/552fb067c9a33de1c3a0bed5242fb7bc78648f7a))
* **ci:** bump node version for release workflows ([dbec3db](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/dbec3dbdb50819a51125e78a26ad8c8c0a906ed7))
* **ci:** enable for pull requests ([4d8b109](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/4d8b109e8c5d5102ce73ad1e89866d893ee21d3d))
* **ci:** only run for pushes and fork pull requests ([2615b03](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2615b0385742a30d3941c943ea0eecc55c568c22))
* configure new SDK language ([f706b05](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/f706b051483cae89ad1a7fb7b381687324af7c21))
* **docs:** grammar improvements ([82267ba](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/82267bad799fdf01ba3fd36d1bb3ee8676ac2886))
* **docs:** use top-level-await in example snippets ([1285d7f](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/1285d7fde5ce0c3dc67668c511012cfa95f5d766))
* improve publish-npm script --latest tag logic ([88ebe91](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/88ebe91e6cf3fa48cd1c67c9784579cf3bd90a80))
* **internal:** codegen related update ([2167dda](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2167dda2ce563433215435cdf332b6a3d19d9bda))
* **internal:** codegen related update ([c673bef](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/c673bef49ea363c0864da6d6a6dd5b7bda92f214))
* **internal:** make base APIResource abstract ([868147b](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/868147bc57ef154b1a3d5bf2f807bfe2df12967e))
* **internal:** update dependency ([f89f956](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/f89f95680b8d325d4f779c2dda942b0a0a0ba654))
* **mcp:** provides high-level initMcpServer function and exports known clients ([c7a8c4c](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/c7a8c4c477b773eab136bbb9d01ba2d010fa134b))
* **mcp:** remove duplicate assignment ([7a5dd3f](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/7a5dd3f67117235c772506c534798fcd905fee58))
* **tests:** use node 22 for CI tests ([a5915a4](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a5915a4b8809ae3ab67a6db9dff2e2639c4e3207))


### Documentation

* **readme:** fix typo ([38706ae](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/38706ae233f2d0c1be056b9c7bf05df74515c542))


### Refactors

* **types:** replace Record with mapped types ([2b23eae](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2b23eae1c534d50dcd2cd6d50afa41d707ccdaf9))

## 0.1.0-alpha.8 (2025-04-02)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#34](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/34)) ([105dee2](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/105dee20f1334851bcda1f03e0307f28ea955208))
* **api:** api update ([eb7451a](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/eb7451ab9a4fcd7237f43ff8b6b8d3e4a5f42af4))
* **api:** api update ([#13](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/13)) ([ab260c7](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab260c7cdec809776f786f2313e0052f2c9475f0))
* **api:** api update ([#15](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/15)) ([ab98929](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab98929c9f3eb13a998cd760fbe6b298d14cb7b4))
* **api:** api update ([#26](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/26)) ([ee39b8a](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ee39b8a24f9a62525db88c768089f3f7a0b34b98))
* **api:** api update ([#31](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/31)) ([2716dac](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2716dac41b6f182efa2c97beb62621fb1f3a28db))
* **api:** api update ([#39](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/39)) ([cf6040e](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/cf6040e8b95b49d5d1770a420cf70d58b50e2077))
* **api:** api update ([#40](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/40)) ([cbf5d0f](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/cbf5d0fb4646c64c5c39aa564e8a62d1946a45f3))
* **api:** api update ([#9](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/9)) ([a6bc0b6](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a6bc0b62dd2edef803c44eb130313d7b663b070d))
* **api:** First release ([#16](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/16)) ([67ae2e1](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/67ae2e14f07321903f5be6588b4e3911786dcf83))
* **api:** manual updates ([#11](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/11)) ([9c8dd6b](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9c8dd6b960b610dc7ce1b4a8ddba56edf90547a1))
* **api:** manual updates ([#18](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/18)) ([fdf9c64](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdf9c648241e6020fff6194d628112b6a479e1d2))
* **api:** manual updates ([#6](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/6)) ([a3853d5](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a3853d5640c7c123dc3646181dacb97b3a6c40bb))
* **api:** update via SDK Studio ([a559fea](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a559feac75b5125eb51420b815a631e0534f9664))
* **api:** update via SDK Studio ([62c4b7d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/62c4b7d28e5e7e7205ba1ad4fc4c01fe27b6f888))
* **client:** accept RFC6838 JSON content types ([#35](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/35)) ([76944a3](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/76944a324451ecb44df0eb2e988466680113fb5c))
* **client:** send `X-Stainless-Timeout` header ([#29](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/29)) ([a514d1d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a514d1d30b19b3a049c9a389dc12d45ec653651f))


### Bug Fixes

* **client:** fix export map for index exports ([#30](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/30)) ([9028d50](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9028d50c84e1293879d0345b642d75c130ecb71f))


### Chores

* **exports:** cleaner resource index imports ([#37](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/37)) ([9610ff5](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9610ff522cfb85098b36efec99157fd7d50bdb87))
* **exports:** stop using path fallbacks ([#38](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/38)) ([0f9de69](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/0f9de69ad76c0aa7164012b2654fd31ff6edfbf9))
* fix references to nested types ([#28](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/28)) ([0ca5906](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/0ca590628dcb1254c327e98abdf933d50a97d78f))
* go live ([#1](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/1)) ([2ebf472](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2ebf4728b97315ed0bd4ada550653ea6fd1e5fe3))
* go live ([#4](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/4)) ([680ba9d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/680ba9d9f8512eefb65879613f2e44112f9252e8))
* **internal:** add test ([#27](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/27)) ([fbd8b19](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fbd8b1962fd474b802280baa1fe231e6e3173d18))
* **internal:** fix devcontainers setup ([#32](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/32)) ([2b0946f](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2b0946f8677e337d2e117f64c6216a0ddec3a22a))
* **internal:** remove extra empty newlines ([#36](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/36)) ([0e9db9f](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/0e9db9f9cb7e0a0d8720eeb93d2b67fb19e271c6))
* update SDK settings ([#3](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/3)) ([fdd22a2](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdd22a2f6be151e2b68bccf83d4afccc9b487e99))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#33](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/33)) ([c4c5ce9](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/c4c5ce916769c9beaef9d092860d37442ae17822))

## 0.1.0-alpha.7 (2025-01-20)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** api update ([eb7451a](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/eb7451ab9a4fcd7237f43ff8b6b8d3e4a5f42af4))
* **api:** api update ([#13](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/13)) ([ab260c7](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab260c7cdec809776f786f2313e0052f2c9475f0))
* **api:** api update ([#15](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/15)) ([ab98929](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab98929c9f3eb13a998cd760fbe6b298d14cb7b4))
* **api:** api update ([#9](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/9)) ([a6bc0b6](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a6bc0b62dd2edef803c44eb130313d7b663b070d))
* **api:** First release ([#16](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/16)) ([67ae2e1](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/67ae2e14f07321903f5be6588b4e3911786dcf83))
* **api:** manual updates ([#11](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/11)) ([9c8dd6b](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9c8dd6b960b610dc7ce1b4a8ddba56edf90547a1))
* **api:** manual updates ([#18](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/18)) ([fdf9c64](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdf9c648241e6020fff6194d628112b6a479e1d2))
* **api:** manual updates ([#6](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/6)) ([a3853d5](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a3853d5640c7c123dc3646181dacb97b3a6c40bb))
* **api:** update via SDK Studio ([a559fea](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a559feac75b5125eb51420b815a631e0534f9664))
* **api:** update via SDK Studio ([62c4b7d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/62c4b7d28e5e7e7205ba1ad4fc4c01fe27b6f888))


### Chores

* go live ([#1](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/1)) ([2ebf472](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2ebf4728b97315ed0bd4ada550653ea6fd1e5fe3))
* go live ([#4](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/4)) ([680ba9d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/680ba9d9f8512eefb65879613f2e44112f9252e8))
* update SDK settings ([#3](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/3)) ([fdd22a2](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdd22a2f6be151e2b68bccf83d4afccc9b487e99))

## 0.1.0-alpha.6 (2025-01-20)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** api update ([eb7451a](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/eb7451ab9a4fcd7237f43ff8b6b8d3e4a5f42af4))
* **api:** api update ([#13](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/13)) ([ab260c7](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab260c7cdec809776f786f2313e0052f2c9475f0))
* **api:** api update ([#15](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/15)) ([ab98929](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab98929c9f3eb13a998cd760fbe6b298d14cb7b4))
* **api:** api update ([#9](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/9)) ([a6bc0b6](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a6bc0b62dd2edef803c44eb130313d7b663b070d))
* **api:** First release ([#16](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/16)) ([67ae2e1](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/67ae2e14f07321903f5be6588b4e3911786dcf83))
* **api:** manual updates ([#11](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/11)) ([9c8dd6b](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9c8dd6b960b610dc7ce1b4a8ddba56edf90547a1))
* **api:** manual updates ([#18](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/18)) ([fdf9c64](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdf9c648241e6020fff6194d628112b6a479e1d2))
* **api:** manual updates ([#6](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/6)) ([a3853d5](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a3853d5640c7c123dc3646181dacb97b3a6c40bb))
* **api:** update via SDK Studio ([a559fea](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a559feac75b5125eb51420b815a631e0534f9664))
* **api:** update via SDK Studio ([62c4b7d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/62c4b7d28e5e7e7205ba1ad4fc4c01fe27b6f888))


### Chores

* go live ([#1](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/1)) ([2ebf472](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2ebf4728b97315ed0bd4ada550653ea6fd1e5fe3))
* go live ([#4](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/4)) ([680ba9d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/680ba9d9f8512eefb65879613f2e44112f9252e8))
* update SDK settings ([#3](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/3)) ([fdd22a2](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdd22a2f6be151e2b68bccf83d4afccc9b487e99))

## 0.1.0-alpha.5 (2025-01-20)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** manual updates ([#18](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/18)) ([fdf9c64](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdf9c648241e6020fff6194d628112b6a479e1d2))

## 0.1.0-alpha.4 (2025-01-20)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** api update ([#13](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/13)) ([ab260c7](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab260c7cdec809776f786f2313e0052f2c9475f0))
* **api:** api update ([#15](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/15)) ([ab98929](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/ab98929c9f3eb13a998cd760fbe6b298d14cb7b4))
* **api:** First release ([#16](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/16)) ([67ae2e1](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/67ae2e14f07321903f5be6588b4e3911786dcf83))

## 0.1.0-alpha.3 (2025-01-20)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** api update ([#9](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/9)) ([a6bc0b6](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a6bc0b62dd2edef803c44eb130313d7b663b070d))
* **api:** manual updates ([#11](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/11)) ([9c8dd6b](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/9c8dd6b960b610dc7ce1b4a8ddba56edf90547a1))

## 0.1.0-alpha.2 (2025-01-19)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** manual updates ([#6](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/6)) ([a3853d5](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a3853d5640c7c123dc3646181dacb97b3a6c40bb))

## 0.1.0-alpha.1 (2025-01-19)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/CarbonTrail/carbonapi-sdk-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api update ([eb7451a](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/eb7451ab9a4fcd7237f43ff8b6b8d3e4a5f42af4))
* **api:** update via SDK Studio ([a559fea](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/a559feac75b5125eb51420b815a631e0534f9664))
* **api:** update via SDK Studio ([62c4b7d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/62c4b7d28e5e7e7205ba1ad4fc4c01fe27b6f888))


### Chores

* go live ([#1](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/1)) ([2ebf472](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/2ebf4728b97315ed0bd4ada550653ea6fd1e5fe3))
* go live ([#4](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/4)) ([680ba9d](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/680ba9d9f8512eefb65879613f2e44112f9252e8))
* update SDK settings ([#3](https://github.com/CarbonTrail/carbonapi-sdk-node/issues/3)) ([fdd22a2](https://github.com/CarbonTrail/carbonapi-sdk-node/commit/fdd22a2f6be151e2b68bccf83d4afccc9b487e99))
