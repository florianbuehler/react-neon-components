# react-neon-components

A small react component library to display header elements in different neon optics.

A storybook with some examples can be found at [https://florianbuehler.github.io/react-neon-components/](https://florianbuehler.github.io/react-neon-components/) and the source code at [https://github.com/florianbuehler/react-neon-components/](https://github.com/florianbuehler/react-neon-components/).


## Installation

To install the package, run 

```
npm install react-neon-components --save
```


## Usage

### Example
```javascript
import { NeonH1 } from 'react-neon';


<>
  ...
  <NeonH1 color='red' effect="flicker" fontSize="5rem">Neon</NeonH1>
  ...
</>
```

### Available Properties

`react-neon-components` currently supports the following properties:

- **color** - `string` [required]: The color of the element. It can be every valid CSS color - e.g. `red`, `rgb(255,0,0)` or `##ff0000`.
- **fontSize** - `string` [optional]: The font size of the element in `rem`, `em` or `px`. 
- **effect** - `string` [optional]: Specifies which effect should be used. Available options are `glow`, `flicker`, `subtle-flicker` and `pulsate`. Defaults to `glow`. 
- **border** - `boolean` [optional]: Specifies if a border should be displayed. Defaults to `false`.
