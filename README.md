# Loadimpact-vsts-extension
Microsoft Visual Studio Team Services (VSTS) extension to trigger a test from LoadImpact.com with the build-test-release pipeline

![Build Task](./imgs/Screenshot1.png)

![Conf](./imgs/Screenshot2.png)

## [You can check this extension from the marketplace by clicking here.](https://marketplace.visualstudio.com/items?itemName=julienstroheker.loadimpact) ##

### To compile it by yourself, please run:
* `npm install`
* `gulp`

The vsix package will be produced in `_package`, and it can be uploaded to Visual Studio Team Services market place for sharing. 

> You will need the following prerequisite:
>* Typescript
>* tfx-cli
>* You need to have an account on [LoadImpact.com](https://loadimpact.com/) and generate an API Token to use it.

If you need more imformations on how you can publish your package : [Visual Studio Team Services Docs](https://www.visualstudio.com/docs/integrate/extensions/publish/overview#upload)

[![Analytics](https://ga-beacon.appspot.com/UA-85536321-1/loadimpact-vsts-extension/readme?pixel)](https://github.com/igrigorik/ga-beacon)
