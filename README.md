# tile-size-distribution
国土地理院の [mokuroku](https://github.com/gsi-cyberjapan/mokuroku-spec) を使って、各タイルのデータサイズを地図上で可視化します。

![ZL15のタイルサイズ分布例](https://mghs15.github.io/tile-size-distribution/img/6-56-25-tile.csv.png)

## how to use 
1. Download [mokuroku](https://github.com/gsi-cyberjapan/mokuroku-spec) and decompress it.
2. If you want to get a raster tile ver., run below on Node.js;

First, make a `buf` folder, then install [sharp](https://www.npmjs.com/package/sharp?activeTab=readme)
```
npm install sharp
```
followed by
```
node list2csv.js
node csv2array.js
node array2img.js
```

3. If you want to get a vector tile ver., run below on Node.js;
```
node list2poly.js
node tiles.js
```

## demo site
https://mghs15.github.com/tile-size-distribution/

Tile size distribution of ZL15 [地理院地図Vector](https://github.com/gsi-cyberjapan/gsimaps-vector-experiment).

## blog
https://qiita.com/mg_kudo/items/f6d3a1ec5c0117237fd3

## reference 
* [地理院タイル目録（mokuroku）](https://github.com/gsi-cyberjapan/mokuroku-spec)
* [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js/) 
* [地理院地図Vector](https://github.com/gsi-cyberjapan/gsimaps-vector-experiment)
* [最適化ベクトルタイル](https://github.com/gsi-cyberjapan/optimal_bvmap)


