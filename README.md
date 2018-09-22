# Series Visualizer

_Quick and dirty series visualizer_

## Installation

Assuming NodeJs and YarnPkg are installed.

```bash
git clone https://github.com/Stoakes/series-visualizer.git
cd series-visualizer
yarn install
yarn start
```

## Usage

Once the application started, Copy-Past your series into the form and see them on the chart.

Series format is expected to be (even though this can be changed in `AppContainer.js`)

```json
{
  "name": "fuel",
  "data": [
    { "timestamp": 1537592706, "value": 10 },
    { "timestamp": 1537592706, "value": 5 },
    { "timestamp": 1537592706, "value": 20 },
    { "timestamp": 1537592706, "value": 15 }
  ]
}
```
