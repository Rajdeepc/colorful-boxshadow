# Colorful BoxShadow

A Simple npm package to make your images or elements have colorful box shadows.

## Installation

```
npm i colorBoxShadow --save
```

## How to use

```
import { colorBoxShadow } from 'colorBoxShadow';

colorBoxShadow({
    shadow_type: 'light-1',
    shadow_color: '#fafafa'
});
```

## Options

colorBoxShadow supports two options, both of which are optional

* *shadow_type* - light-1 | light-2 | medium-1 | medium-2 | hard | Defaults to light-1
* *shadow_color* - defaults to #fafafa

## Shadow Types:

light-1:

!['light-1'](light1.png)

light-2:

!['light-2'](light2.png)

medium-1:

!['medium-1'](medium1.png)

medium-2:

!['medium-2'](medium2.png)

hard:

!['hard'](hard.png)
