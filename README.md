## Introduction
fileWriter tool base on web browser by using HTML5 interface(download attr), support mostly modern browser including IE 10+
## Install

```bash
npm install file-writer
```

## Usage example

``` javascript
import writer from 'file-writer';
writer('a.csv', '\
year,age,status,sex,population\r\n\
1850,20,0,1,1017281\r\n\
1850,20,0,2,1003841\r\n\
',{})
```
And then the browser will pop a download dialog with filename 'a.csv'.

## API

- `.writer(filename = 'file', content, encode = 'utf-8')`: content will be encoded as binary automaticly;
you'r recommended to supply fileName with extension.

## Contributing

We welcome all contributions, please submit any ideas as [pull requests](https://github.com/azl397985856/file-writer/pulls) or as a [GitHub issue](https://github.com/azl397985856/file-writer/issues).
## Licence
MIT
