# sygic-custom-url-ng

Angular wrapper for [sygic-custom-url](https://github.com/frankkoenigstein/sygic-custom-url)

## Install
`npm i --save sygic-custom-url-ng`

## Usage

### Angular Module
```ts
import { SygicCustomUrlModule } from "sygic-custom-url-ng";

@NgModule({
    imports: [ SygicCustomUrlModule ]
})
export class AppModule {}
```

### Service
```ts
import { Component } from "@angular/core";
import { CustomUrlService } from "sygic-custom-url";

@Component({ ... })
export class SomeComponent {
    constructor(private customUrlService: CustomUrlService) {}

    ...
}
```

## Documentation

[Please see pages](https://frankkoenigstein.github.io/sygic-custom-url-ng/)

## Contributing
### Test
`npm test`

### Build
`npm run build`

### Documentation
`npm run compodoc`
