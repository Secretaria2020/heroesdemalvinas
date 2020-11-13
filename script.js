(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_A560693F_BDE8_8B54_41E2_A9E40892AF63].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer",
  {
   "children": [
    "this.Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F"
   ],
   "scrollBarOpacity": 0.5,
   "scrollBarWidth": 10,
   "left": "0%",
   "backgroundOpacity": 0,
   "width": "100%",
   "paddingBottom": 0,
   "borderRadius": 0,
   "overflow": "scroll",
   "minHeight": 1,
   "borderSize": 0,
   "verticalAlign": "middle",
   "propagateClick": false,
   "paddingRight": 0,
   "bottom": "0%",
   "minWidth": 1,
   "scrollBarColor": "#000000",
   "scrollBarVisible": "rollOver",
   "class": "Container",
   "horizontalAlign": "center",
   "gap": 10,
   "scrollBarMargin": 2,
   "height": 142,
   "contentOpaque": false,
   "paddingTop": 0,
   "data": {
    "name": "Container44746"
   },
   "shadow": false,
   "layout": "horizontal",
   "paddingLeft": 0
  },
  "this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4",
  "this.IconButton_AA6417B8_BDDF_875C_41E7_7F9320AAA8D7",
  "this.IconButton_AA64A7B8_BDDF_875C_41D4_B425BA2F7963",
  "this.IconButton_AA64E7B8_BDDF_875C_41E6_06201187DCF7",
  "this.IconButton_A560693F_BDE8_8B54_41E2_A9E40892AF63"
 ],
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "definitions": [{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2E65E2A_BCA8_897C_41DD_CA6C5E03B2A8"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_B9613F19_B7C0_2CF4_41E3_E9B15775CDC8"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_t.jpg"
},
{
 "thumbnailUrl": "media/album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B_0_t.jpg",
 "id": "album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B_0",
 "width": 3352,
 "label": "006",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 9600,
 "height": 3804
},
{
 "thumbnailUrl": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_3_t.jpg",
 "id": "album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_3",
 "width": 3155,
 "label": "016",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_3.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 2583
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.14,
  "pitch": -6.18
 },
 "class": "PanoramaCamera",
 "id": "panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_8_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_8",
 "width": 1170,
 "label": "009",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_8.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 787
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_B97C48CD_B7C1_D56C_41AE_4DFF267E1360"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A5B25D7C_B4ED_9543_41D4_F8B227BA53A8"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.04,
  "pitch": -6.83
 },
 "class": "PanoramaCamera",
 "id": "panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.32,
  "pitch": -3.29
 },
 "class": "PanoramaCamera",
 "id": "panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_BBF4E542_B4A7_9547_41CC_85F47B625CE4",
  "this.overlay_A4317380_B4A6_ADC3_41DE_C641A564B81E"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2E1EE2B_BCA8_897C_41A8_CFF3086C7F67"
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_12_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_12",
 "width": 1024,
 "label": "013",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_12.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 683
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_11_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_11",
 "width": 1200,
 "label": "012",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_11.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 675
},
{
 "playList": "this.album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E",
 "label": "ELEMENTOS",
 "thumbnailUrl": "media/album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E_t.png"
},
{
 "thumbnailUrl": "media/album_A8702ABF_BC68_8D4C_418D_273E3AC9668E_0_t.jpg",
 "id": "album_A8702ABF_BC68_8D4C_418D_273E3AC9668E_0",
 "width": 5540,
 "label": "004",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A8702ABF_BC68_8D4C_418D_273E3AC9668E_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 10000,
 "height": 3251
},
{
 "thumbnailUrl": "media/album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_1_t.jpg",
 "id": "album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_1",
 "width": 4408,
 "label": "008",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_1.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 2831
},
{
 "thumbnailUrl": "media/album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_0_t.jpg",
 "id": "album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_0",
 "width": 4071,
 "label": "ELEMENTOS",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 3180
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A6B2295C_B7C0_576C_41C4_B750BF3789B0",
  "this.overlay_A5C00ADE_B7C7_D56C_41DD_C0B5F0CC868B",
  "this.overlay_A4E9BFB6_B7C0_6B3C_4181_CDA189E664B2"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "AUDITORIO",
 "id": "panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2FACE25_BCA8_8974_41DB_02122A3FAFEE"
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_5_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_5",
 "width": 1200,
 "label": "006",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_5.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 675
},
{
 "buttonPause": "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
 "viewerArea": "this.MainViewer",
 "buttonZoomOut": "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
 "buttonPlayRight": "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
 "buttonMoveDown": "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
 "id": "MainViewerPanoramaPlayer",
 "buttonPlayLeft": "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveRight": "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
 "touchControlMode": "drag_rotation",
 "buttonMoveUp": "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
 "buttonMoveLeft": "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonZoomIn": "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
 "buttonRestart": "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25"
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_2_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_2",
 "width": 1200,
 "label": "003",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 675
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_10_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_10",
 "width": 1024,
 "label": "011",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_10.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 683
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_13_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_13",
 "width": 1024,
 "label": "014",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_13.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 732
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A5A74B2F_B7C3_EB2C_41A3_EA5797437271"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "MONUMENTO",
 "id": "panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 61.16,
   "yaw": 122.52,
   "panorama": "this.panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655",
   "distance": 1
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_t.jpg"
},
{
 "thumbnailUrl": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_0_t.jpg",
 "id": "album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_0",
 "width": 4249,
 "label": "013",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 2544
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A1F01E5C_B4EE_9743_41DD_FC48DDA066D1"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2E5AE27_BCA8_8974_41E0_D870FD25B680"
},
{
 "class": "PhotoAlbumPlayer",
 "buttonPause": "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonRestart": "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25"
},
{
 "thumbnailUrl": "media/album_AAF68834_BCAB_8954_41D1_155AFCF6E977_0_t.jpg",
 "id": "album_AAF68834_BCAB_8954_41D1_155AFCF6E977_0",
 "width": 5803,
 "label": "012",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AAF68834_BCAB_8954_41D1_155AFCF6E977_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 3473
},
{
 "playList": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F",
 "label": "ALBUM DE FOTOS",
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_t.png"
},
{
 "thumbnailUrl": "media/album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069_0_t.jpg",
 "id": "album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069_0",
 "width": 6000,
 "label": "017",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 10000,
 "height": 4000
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_9_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_9",
 "width": 1024,
 "label": "010",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_9.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 683
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A7169354_B7C0_5B7C_41D7_2ADC0C8D66E9",
  "this.overlay_B8102B2C_B7C0_2B2C_41E3_56560A58C3CF"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIAPAL",
 "id": "panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_t.jpg"
},
{
 "playList": "this.album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912",
 "label": "ELEMENTOS",
 "thumbnailUrl": "media/album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_t.png"
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_camera",
   "media": "this.panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_camera",
   "media": "this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_camera",
   "media": "this.panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_camera",
   "media": "this.panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_camera",
   "media": "this.panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_camera",
   "media": "this.panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_camera",
   "media": "this.panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_camera",
   "media": "this.panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_camera",
   "media": "this.panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_camera",
   "media": "this.panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_camera",
   "media": "this.panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_camera",
   "media": "this.panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_camera",
   "media": "this.panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_camera",
   "media": "this.panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_camera",
   "media": "this.panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_camera",
   "media": "this.panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_camera",
   "media": "this.panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_ADB24705_BC78_833C_41E7_3E94C615243F_0"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist, 18, 0)"
  }
 ],
 "id": "ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.96,
  "pitch": -14.22
 },
 "class": "PanoramaCamera",
 "id": "panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_BB2A9A45_B47A_9F4D_419A_084D208B097E",
  "this.overlay_A4306EE1_B46F_F745_41AE_D473575C87F0",
  "this.overlay_A6BDDADF_B7C0_556C_41DF_001140668F9C",
  "this.overlay_AAECF2CC_BCA9_7935_41DF_AD326E9DF73C"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "HALL ENTRADA",
 "id": "panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A6193DCA_B7C0_6F54_41D9_410B38CA3C98"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "AUDITORIO",
 "id": "panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_camera",
   "media": "this.panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_camera",
   "media": "this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_camera",
   "media": "this.panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_camera",
   "media": "this.panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_camera",
   "media": "this.panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_camera",
   "media": "this.panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_camera",
   "media": "this.panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_camera",
   "media": "this.panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_camera",
   "media": "this.panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_camera",
   "media": "this.panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_camera",
   "media": "this.panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_camera",
   "media": "this.panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_camera",
   "media": "this.panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_camera",
   "media": "this.panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_camera",
   "media": "this.panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_camera",
   "media": "this.panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_camera",
   "media": "this.panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_6_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_6",
 "width": 1024,
 "label": "007",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_6.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 683
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.72,
  "pitch": -1.08
 },
 "class": "PanoramaCamera",
 "id": "panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.97,
  "pitch": -7.65
 },
 "class": "PanoramaCamera",
 "id": "panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_1_t.jpg",
 "id": "album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_1",
 "width": 6000,
 "label": "014",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_1.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 2029
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_B9919B7D_B467_9D3D_41C1_B50850E2AAF9",
  "this.overlay_A5DC2FBA_B7C0_EB34_41B1_7257BE5BA9C3"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "ENTRADA PRINCIPAL",
 "id": "panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 122.52,
   "yaw": 61.16,
   "panorama": "this.panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_t.jpg"
},
{
 "playList": "this.album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A",
 "label": "MORTERO",
 "thumbnailUrl": "media/album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A_t.png"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 128.31,
  "pitch": -13.94
 },
 "class": "PanoramaCamera",
 "id": "panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "playList": "this.album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B",
 "label": "ELEMENTOS",
 "thumbnailUrl": "media/album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B_t.png"
},
{
 "thumbnailUrl": "media/photo_A87C213E_BC68_9F4C_41C7_7B08A51133CE_t.jpg",
 "id": "photo_A87C213E_BC68_9F4C_41C7_7B08A51133CE",
 "width": 3321,
 "label": "ELEMENTOS",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_A87C213E_BC68_9F4C_41C7_7B08A51133CE.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 3543
},
{
 "thumbnailUrl": "media/album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_0_t.jpg",
 "id": "album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_0",
 "width": 4961,
 "label": "010",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 3270
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.86,
  "pitch": -0.75
 },
 "class": "PanoramaCamera",
 "id": "panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2E48E28_BCA8_897C_4186_848C1621B592"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A5F4F8C7_B4FD_BB4D_41CA_C42105AFFBEF",
  "this.overlay_A5CEEA87_B4FE_BFCD_41E2_04A29D135595"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A49F7455_B4E6_AB4D_41D9_7C0539FDB7DB"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_t.jpg"
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_3_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_3",
 "width": 275,
 "label": "004",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_3.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 183
},
{
 "playList": "this.album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7",
 "label": "ELEMENTOS",
 "thumbnailUrl": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_t.png"
},
{
 "thumbnailUrl": "media/album_ADB24705_BC78_833C_41E7_3E94C615243F_0_t.jpg",
 "id": "album_ADB24705_BC78_833C_41E7_3E94C615243F_0",
 "width": 4408,
 "label": "008",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_ADB24705_BC78_833C_41E7_3E94C615243F_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 10000,
 "height": 2831
},
{
 "playList": "this.album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21",
 "label": "Album de Fotos 007",
 "thumbnailUrl": "media/album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_t.png"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2FFEE1F_BCA8_8954_41C7_A97F025253EB"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A50BDFFC_B7C0_2B2C_41BF_2B0649141437"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_t.jpg"
},
{
 "playList": "this.album_A8702ABF_BC68_8D4C_418D_273E3AC9668E_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_A8702ABF_BC68_8D4C_418D_273E3AC9668E",
 "label": "CASCO, CAMISA Y BOTAS DE COMBATE DE JUAN CARLOS FONTANA",
 "thumbnailUrl": "media/album_A8702ABF_BC68_8D4C_418D_273E3AC9668E_t.png"
},
{
 "thumbnailUrl": "media/album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E_0_t.jpg",
 "id": "album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E_0",
 "width": 2799,
 "label": "ELEMENTOS",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 2793
},
{
 "thumbnailUrl": "media/photo_AF5CCCCC_BC58_86CC_41C2_4DB11965EDF7_t.jpg",
 "id": "photo_AF5CCCCC_BC58_86CC_41C2_4DB11965EDF7",
 "width": 4504,
 "label": "ELEMENTOS",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_AF5CCCCC_BC58_86CC_41C2_4DB11965EDF7.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 3365
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A541F07A_B7FF_D534_41CB_506C31D70E8C",
  "this.overlay_A6F23D67_B7C3_EF5C_41DD_4DE4B9E56C3E"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_t.jpg"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_A8702ABF_BC68_8D4C_418D_273E3AC9668E",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2FBAE25_BCA8_8974_41BC_C74A7F3FB685"
},
{
 "thumbnailUrl": "media/album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_2_t.jpg",
 "id": "album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_2",
 "width": 3156,
 "label": "009",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_2.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 2640
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A55EF931_B4DD_9AC5_41D9_93838CB69585",
  "this.overlay_A6A20982_B4DD_BDC7_41E1_71ADC2B16115",
  "this.overlay_BAB3699E_B7C0_F7EC_41E6_1B4BEC945D02"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.67,
  "pitch": 5.17
 },
 "class": "PanoramaCamera",
 "id": "panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.48,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A20DAE5B_BCA8_89DC_41E1_E43006229ACB",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_0_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_0",
 "width": 1280,
 "label": "001",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1280
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A49763B8_B7C3_DB34_41D7_EE49F92BB367"
 ],
 "hfovMin": "150%",
 "class": "Panorama",
 "label": "SALA PRINCIPAL",
 "id": "panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.07,
  "pitch": -10.21
 },
 "class": "PanoramaCamera",
 "id": "panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A_0_t.jpg",
 "id": "album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A_0",
 "width": 4535,
 "label": "005",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A_0.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 10000,
 "height": 3556
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A237FE72_BCA8_89EC_41E3_408EC6DC9B46",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.45,
  "pitch": -11.09
 },
 "class": "PanoramaCamera",
 "id": "panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_1_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_1",
 "width": 999,
 "label": "002",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_1.jpeg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 661
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_4_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_4",
 "width": 1200,
 "label": "005",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_4.jpeg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 675
},
{
 "thumbnailUrl": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_7_t.jpg",
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_7",
 "width": 1200,
 "label": "008",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_7.jpg"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 675
},
{
 "thumbnailUrl": "media/album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_1_t.jpg",
 "id": "album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_1",
 "width": 4811,
 "label": "011",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_1.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 4000
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_AAF68834_BCAB_8954_41D1_155AFCF6E977",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2FEBE20_BCA8_896C_41E3_EC545CE54320"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.43,
  "pitch": -20.45
 },
 "class": "PanoramaCamera",
 "id": "panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.43,
  "pitch": -21.09
 },
 "class": "PanoramaCamera",
 "id": "panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2F84E24_BCA8_8974_41CA_96CF95697339"
},
{
 "playList": "this.album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069",
 "label": "BARCO DE PAPEL",
 "thumbnailUrl": "media/album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069_t.png"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.32,
  "pitch": -25.14
 },
 "class": "PanoramaCamera",
 "id": "panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.24,
  "pitch": -3.62
 },
 "class": "PanoramaCamera",
 "id": "panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_ADB24705_BC78_833C_41E7_3E94C615243F",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_A2FE2E21_BCA8_896C_41DB_0C5DCEEDC420"
},
{
 "thumbnailUrl": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_2_t.jpg",
 "id": "album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_2",
 "width": 5669,
 "label": "015",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_2.JPG"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 2875
},
{
 "playList": "this.album_AAF68834_BCAB_8954_41D1_155AFCF6E977_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_AAF68834_BCAB_8954_41D1_155AFCF6E977",
 "label": "PARED",
 "thumbnailUrl": "media/album_AAF68834_BCAB_8954_41D1_155AFCF6E977_t.png"
},
{
 "playList": "this.album_ADB24705_BC78_833C_41E7_3E94C615243F_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_ADB24705_BC78_833C_41E7_3E94C615243F",
 "label": "PALA Y CARTUCHO FALL",
 "thumbnailUrl": "media/album_ADB24705_BC78_833C_41E7_3E94C615243F_t.png"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 4,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 50,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 30,
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 10,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 20,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "paddingLeft": 0,
 "progressBarBorderRadius": 4,
 "playbackBarBorderRadius": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 2,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "shadow": false,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
  "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
  "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
  "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
  "this.Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
  "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
  "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
  "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
  "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
 ],
 "height": "95.07%",
 "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
 "backgroundOpacity": 0,
 "width": 360,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "hidden",
 "minHeight": 20,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 360,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "gap": 4,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container37498"
 },
 "shadow": false,
 "layout": "horizontal",
 "paddingLeft": 0
},
{
 "itemVerticalAlign": "middle",
 "id": "ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4",
 "left": "0%",
 "width": 181,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "itemThumbnailHeight": 75,
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelGap": 9,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 20,
 "itemPaddingBottom": 3,
 "itemThumbnailShadowColor": "#000000",
 "selectedItemLabelFontColor": "#000000",
 "scrollBarColor": "#FFFFFF",
 "itemLabelFontStyle": "normal",
 "minWidth": 20,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "class": "ThumbnailList",
 "itemMode": "normal",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "height": "99.844%",
 "itemLabelFontFamily": "GothamMedium",
 "paddingTop": 10,
 "itemThumbnailShadowOpacity": 0.54,
 "itemHorizontalAlign": "center",
 "layout": "vertical",
 "itemBorderRadius": 0,
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadow": true,
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemThumbnailShadowVerticalLength": 3,
 "itemBackgroundColorRatios": [],
 "bottom": "0%",
 "rollOverItemLabelFontWeight": "normal",
 "rollOverItemBackgroundOpacity": 0,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "left",
 "playList": "this.ThumbnailList_A048811B_B840_34F4_41E2_CB620BD904C4_playlist",
 "itemPaddingRight": 3,
 "selectedItemLabelFontSize": "10px",
 "itemThumbnailWidth": 75,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": false,
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": "10px",
 "data": {
  "name": "ThumbnailList35762"
 },
 "shadow": false
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_AA6417B8_BDDF_875C_41E7_7F9320AAA8D7",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": "1.27%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_AA6417B8_BDDF_875C_41E7_7F9320AAA8D7_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "35.3%",
 "iconURL": "skin/IconButton_AA6417B8_BDDF_875C_41E7_7F9320AAA8D7.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "click": "this.openLink('https://www.google.com.ar/maps/place/Museo+heroes+de+malvinas/@-33.1283519,-64.3394846,17z/data=!4m12!1m6!3m5!1s0x95d201493942afd7:0x4cf71ddcb1b041b!2sMuseo+heroes+de+malvinas!8m2!3d-33.1283564!4d-64.3372959!3m4!1s0x95d201493942afd7:0x4cf71ddcb1b041b!8m2!3d-33.1283564!4d-64.3372959', '_self')",
 "horizontalAlign": "center",
 "height": 50,
 "paddingTop": 0,
 "paddingLeft": 0,
 "transparencyActive": false,
 "shadow": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton Location"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_AA64A7B8_BDDF_875C_41D4_B425BA2F7963",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": "1.27%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_AA64A7B8_BDDF_875C_41D4_B425BA2F7963_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "27.37%",
 "iconURL": "skin/IconButton_AA64A7B8_BDDF_875C_41D4_B425BA2F7963.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "click": "this.openLink('https://www.youtube.com/watch?v=p4DITDiwahI&t=339s', '_self')",
 "horizontalAlign": "center",
 "height": 50,
 "paddingTop": 0,
 "paddingLeft": 0,
 "transparencyActive": false,
 "shadow": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton Video"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_AA64E7B8_BDDF_875C_41E6_06201187DCF7",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": "1.18%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_AA64E7B8_BDDF_875C_41E6_06201187DCF7_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "19.28%",
 "iconURL": "skin/IconButton_AA64E7B8_BDDF_875C_41E6_06201187DCF7.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "click": "this.mainPlayList.set('selectedIndex', 17)",
 "horizontalAlign": "center",
 "height": 50,
 "paddingTop": 0,
 "paddingLeft": 0,
 "transparencyActive": false,
 "shadow": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "maxHeight": 128,
 "maxWidth": 128,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "IconButton_A560693F_BDE8_8B54_41E2_A9E40892AF63",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": "1.36%",
 "toolTipShadowOpacity": 1,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "paddingRight": 0,
 "top": "2.02%",
 "iconURL": "skin/IconButton_A560693F_BDE8_8B54_41E2_A9E40892AF63.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "toolTipShadowSpread": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "toolTip": "Fullscreen",
 "toolTipTextShadowColor": "#000000",
 "height": 50,
 "toolTipShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "transparencyActive": true,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton1493"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37509"
 }
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.12,
   "hfov": 17.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.32
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A61F293B_B7C0_3734_41E6_4BF5A02CF8B5",
   "yaw": -90.12,
   "pitch": -32.32,
   "distance": 100,
   "hfov": 17.78
  }
 ],
 "id": "overlay_B9613F19_B7C0_2CF4_41E3_E9B15775CDC8",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.89,
   "hfov": 18.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A61F993B_B7C0_3734_41E2_5BA713ABC070",
   "yaw": -52.89,
   "pitch": -30.68,
   "distance": 100,
   "hfov": 18.09
  }
 ],
 "id": "overlay_B97C48CD_B7C1_D56C_41AE_4DFF267E1360",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.61,
   "hfov": 18.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.23
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A7AFE308_B4EA_AEC3_41DD_66A7DC4F290C",
   "yaw": 86.61,
   "pitch": -28.23,
   "distance": 100,
   "hfov": 18.54
  }
 ],
 "id": "overlay_A5B25D7C_B4ED_9543_41D4_F8B227BA53A8",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2FE2E21_BCA8_896C_41DB_0C5DCEEDC420, 0, this.panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.64,
   "hfov": 12.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BB082BFC_B4A7_BD43_41B1_2C859C717D42",
   "yaw": 172.64,
   "pitch": 1.64,
   "distance": 100,
   "hfov": 12.27
  }
 ],
 "id": "overlay_BBF4E542_B4A7_9547_41CC_85F47B625CE4",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.11,
   "hfov": 19.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.09
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A6795BFF_B4E7_BD3D_41E4_1E7AF2CD548B",
   "yaw": 91.11,
   "pitch": -22.09,
   "distance": 100,
   "hfov": 19.49
  }
 ],
 "id": "overlay_A4317380_B4A6_ADC3_41DE_C641A564B81E",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.63",
     "zoomFactor": 1.1,
     "y": "0.52"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_A87C213E_BC68_9F4C_41C7_7B08A51133CE",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.26",
     "zoomFactor": 1.1,
     "y": "0.45"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.photo_AF5CCCCC_BC58_86CC_41C2_4DB11965EDF7",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.31",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_AF600C6E_BC6B_85CC_41D5_E7F20268EF5E_AlbumPlayList"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.3,
   "hfov": 6.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.08
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4D9D4D9_B7C0_5D74_41E3_55F4F5AE20C0",
   "yaw": 10.3,
   "pitch": -9.08,
   "distance": 100,
   "hfov": 6.61
  }
 ],
 "id": "overlay_A6B2295C_B7C0_576C_41C4_B750BF3789B0",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2E65E2A_BCA8_897C_41DD_CA6C5E03B2A8, 0, this.panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.59,
   "hfov": 15.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A5CEBE4B_BDB8_8933_41DE_97FEB1CF21DF",
   "yaw": -44.59,
   "pitch": -12.48,
   "distance": 100,
   "hfov": 15.98
  }
 ],
 "id": "overlay_A5C00ADE_B7C7_D56C_41DD_C0B5F0CC868B",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2E1EE2B_BCA8_897C_41A8_CFF3086C7F67, 0, this.panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.09,
   "hfov": 12.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4DE84E8_B7C0_5D54_41D4_A79FB50ADAAC",
   "yaw": -157.09,
   "pitch": -8.59,
   "distance": 100,
   "hfov": 12.14
  }
 ],
 "id": "overlay_A4E9BFB6_B7C0_6B3C_4181_CDA189E664B2",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37505"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37499"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37508"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37506"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37501"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37507"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37504"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37502"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37510"
 }
},
{
 "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "Button37500"
 }
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655, this.camera_A237FE72_BCA8_89EC_41E3_408EC6DC9B46); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.52,
   "hfov": 25.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -18.82
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4D8B4D9_B7C0_5D74_41C6_EB5C3179E000",
   "yaw": 122.52,
   "pitch": -18.82,
   "distance": 50,
   "hfov": 25.17
  }
 ],
 "id": "overlay_A5A74B2F_B7C3_EB2C_41A3_EA5797437271",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.66,
   "hfov": 23.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0_HS_3_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -29.05
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A68304AE_B4ED_ABDF_41D3_5F711E1B386F",
   "yaw": 110.66,
   "pitch": -29.05,
   "distance": 50,
   "hfov": 23.25
  }
 ],
 "id": "overlay_A1F01E5C_B4EE_9743_41DD_FC48DDA066D1",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.57",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_1",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.40",
     "zoomFactor": 1.1,
     "y": "0.26"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_2",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.61",
     "zoomFactor": 1.1,
     "y": "0.37"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_3",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.71"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_4",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.70",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_5",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.32",
     "zoomFactor": 1.1,
     "y": "0.26"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_6",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_7",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.39",
     "zoomFactor": 1.1,
     "y": "0.38"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_8",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.60",
     "zoomFactor": 1.1,
     "y": "0.45"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_9",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_10",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.71",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_11",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.63",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_12",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.70"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_13",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.54",
     "zoomFactor": 1.1,
     "y": "0.72"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_A6D74B1F_BC67_8F54_4195_EE6C9EF1B36F_AlbumPlayList"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2E5AE27_BCA8_8974_41E0_D870FD25B680, 0, this.panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.5,
   "hfov": 12.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A52FE8FC_B7C3_D52C_41A1_EC41487FB21C",
   "yaw": -130.5,
   "pitch": -4.91,
   "distance": 100,
   "hfov": 12.23
  }
 ],
 "id": "overlay_A7169354_B7C0_5B7C_41D7_2ADC0C8D66E9",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.89,
   "hfov": 18.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.82
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A0E37559_B840_3F74_41E2_B8D8A5B5852E",
   "yaw": -97.89,
   "pitch": -27.82,
   "distance": 100,
   "hfov": 18.61
  }
 ],
 "id": "overlay_B8102B2C_B7C0_2B2C_41E3_56560A58C3CF",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.62",
     "zoomFactor": 1.1,
     "y": "0.38"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_1",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.34"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_A80A19F0_BCB8_8AEC_41E3_D4FEF9BE9912_AlbumPlayList"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2FFEE1F_BCA8_8954_41C7_A97F025253EB, 0, this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.02,
   "hfov": 18.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A5B4EE3C_BDB8_8954_41E3_C64F63E1EE5E",
   "yaw": -1.02,
   "pitch": -17.18,
   "distance": 100,
   "hfov": 18.37
  }
 ],
 "id": "overlay_BB2A9A45_B47A_9F4D_419A_084D208B097E",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.44,
   "hfov": 6.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.39
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4E6E4C9_B7C0_5D54_41AA_F4B0FE7BF78E",
   "yaw": 124.44,
   "pitch": -5.39,
   "distance": 100,
   "hfov": 6.67
  }
 ],
 "id": "overlay_A4306EE1_B46F_F745_41AE_D473575C87F0",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.17,
   "hfov": 6.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.39
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4E6B4D9_B7C0_5D74_41C6_624A5E560B57",
   "yaw": 112.17,
   "pitch": -5.39,
   "distance": 100,
   "hfov": 6.67
  }
 ],
 "id": "overlay_A6BDDADF_B7C0_556C_41DF_001140668F9C",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2FEBE20_BCA8_896C_41E3_EC545CE54320, 0, this.panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.14,
   "hfov": 13.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A5B52E3C_BDB8_8954_41D2_E1C0ACEB1505",
   "yaw": 168.14,
   "pitch": -10.84,
   "distance": 100,
   "hfov": 13.66
  }
 ],
 "id": "overlay_AAECF2CC_BCA9_7935_41DF_AD326E9DF73C",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.47,
   "hfov": 17.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.18
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4D974D9_B7C0_5D74_41D3_F02688013989",
   "yaw": 80.47,
   "pitch": -35.18,
   "distance": 100,
   "hfov": 17.2
  }
 ],
 "id": "overlay_A6193DCA_B7C0_6F54_41D9_410B38CA3C98",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.67,
   "hfov": 13.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.42
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A52D7C4D_B465_9B5D_41D4_16A419B6775B",
   "yaw": -0.67,
   "pitch": -3.42,
   "distance": 100,
   "hfov": 13.37
  }
 ],
 "id": "overlay_B9919B7D_B467_9D3D_41C1_B50850E2AAF9",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6, this.camera_A20DAE5B_BCA8_89DC_41E1_E43006229ACB); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.16,
   "hfov": 25.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -18.82
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4E1B4C9_B7C0_5D54_419A_0BF9262730A0",
   "yaw": 61.16,
   "pitch": -18.82,
   "distance": 50,
   "hfov": 25.17
  }
 ],
 "id": "overlay_A5DC2FBA_B7C0_EB34_41B1_7257BE5BA9C3",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 10000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.26",
     "zoomFactor": 1.03,
     "y": "0.66"
    }
   }
  }
 ],
 "id": "album_AD32396E_BC7B_8FCC_41D0_EC26DBFB212A_AlbumPlayList"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.28",
     "zoomFactor": 1.1,
     "y": "0.42"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 9600,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_AFB3EDA7_BC59_877C_41E0_B6EA9B5E2C1B_AlbumPlayList"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2F84E24_BCA8_8974_41CA_96CF95697339, 0, this.panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.55,
   "hfov": 12.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A0E2DD7E_B4FF_953F_41D5_2F11B24CBD6E",
   "yaw": 87.55,
   "pitch": -10.23,
   "distance": 100,
   "hfov": 12.08
  }
 ],
 "id": "overlay_A5F4F8C7_B4FD_BB4D_41CA_C42105AFFBEF",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.08,
   "hfov": 19.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -29.45
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A60210D1_B4FA_AB45_4191_247417AF9E8C",
   "yaw": 141.08,
   "pitch": -29.45,
   "distance": 50,
   "hfov": 19.85
  }
 ],
 "id": "overlay_A5CEEA87_B4FE_BFCD_41E2_04A29D135595",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.61,
   "hfov": 18.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.23
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A0E3DD6E_B4FF_955F_41E5_37FEA6FD82BF",
   "yaw": 86.61,
   "pitch": -28.23,
   "distance": 100,
   "hfov": 18.54
  }
 ],
 "id": "overlay_A49F7455_B4E6_AB4D_41D9_7C0539FDB7DB",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.37",
     "zoomFactor": 1.1,
     "y": "0.58"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_1",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.43",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_2",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.58",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_3",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.44",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_AAD4684F_BCB9_8934_41CB_E4F204F20AF7_AlbumPlayList"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_2",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.52",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.54",
     "zoomFactor": 1.1,
     "y": "0.44"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_1",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.44",
     "zoomFactor": 1.1,
     "y": "0.36"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_AB2D8211_BCBB_992C_41DB_A90AC09D1B21_AlbumPlayList"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.1,
   "hfov": 18.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -36.41
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A4D8E4D9_B7C0_5D74_41D0_7A427322F888",
   "yaw": -110.1,
   "pitch": -36.41,
   "distance": 50,
   "hfov": 18.34
  }
 ],
 "id": "overlay_A50BDFFC_B7C0_2B2C_41BF_2B0649141437",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A8702ABF_BC68_8D4C_418D_273E3AC9668E_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.32",
     "zoomFactor": 1.1,
     "y": "0.47"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 10000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_A8702ABF_BC68_8D4C_418D_273E3AC9668E_AlbumPlayList"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2E48E28_BCA8_897C_4186_848C1621B592, 0, this.panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.98,
   "hfov": 14.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A5B34E3C_BDB8_8954_41D8_B3EA368108DB",
   "yaw": 88.98,
   "pitch": 1.84,
   "distance": 100,
   "hfov": 14.31
  }
 ],
 "id": "overlay_A541F07A_B7FF_D534_41CB_506C31D70E8C",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.52,
   "hfov": 16.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.05
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AE4A8BD8_B847_EB74_41DF_B2F531D31FE0",
   "yaw": 73.52,
   "pitch": -38.05,
   "distance": 100,
   "hfov": 16.57
  }
 ],
 "id": "overlay_A6F23D67_B7C3_EF5C_41DD_4DE4B9E56C3E",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2FBAE25_BCA8_8974_41BC_C74A7F3FB685, 0, this.panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.68,
   "hfov": 12.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A6FAD2CB_B4DB_6F45_41E1_D4E311C8E183",
   "yaw": 75.68,
   "pitch": -1.23,
   "distance": 100,
   "hfov": 12.27
  }
 ],
 "id": "overlay_A55EF931_B4DD_9AC5_41D9_93838CB69585",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_A2FACE25_BCA8_8974_41DB_02122A3FAFEE, 0, this.panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.61,
   "hfov": 16.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AADC4D40_BCA8_8B2C_41E1_5F0424731C86",
   "yaw": -135.61,
   "pitch": 0,
   "distance": 100,
   "hfov": 16.77
  }
 ],
 "id": "overlay_A6A20982_B4DD_BDC7_41E1_71ADC2B16115",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.76,
   "hfov": 19.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0_HS_4_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -32.32
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A6016BEC_B7C3_EB2C_41D3_22BAC0E360DD",
   "yaw": 171.76,
   "pitch": -32.32,
   "distance": 50,
   "hfov": 19.26
  }
 ],
 "id": "overlay_BAB3699E_B7C0_F7EC_41E6_1B4BEC945D02",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.56,
   "hfov": 13.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -34.77
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AE4AEBE8_B847_EB54_41AB_E35896893181",
   "yaw": -139.56,
   "pitch": -34.77,
   "distance": 50,
   "hfov": 13.35
  }
 ],
 "id": "overlay_A49763B8_B7C3_DB34_41D7_EE49F92BB367",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.63",
     "zoomFactor": 1.1,
     "y": "0.43"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 10000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_A9DDF6E7_BCA8_86F4_41D3_1447E364C069_AlbumPlayList"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_AAF68834_BCAB_8954_41D1_155AFCF6E977_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.37",
     "zoomFactor": 1.1,
     "y": "0.26"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_AAF68834_BCAB_8954_41D1_155AFCF6E977_AlbumPlayList"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_ADB24705_BC78_833C_41E7_3E94C615243F_0",
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.51",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 10000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ],
 "id": "album_ADB24705_BC78_833C_41E7_3E94C615243F_AlbumPlayList"
},
{
 "children": [
  "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
  "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
  "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
 ],
 "height": "100%",
 "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "hidden",
 "minHeight": 20,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "gap": 4,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container37503"
 },
 "shadow": false,
 "layout": "vertical",
 "paddingLeft": 0
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A61F293B_B7C0_3734_41E6_4BF5A02CF8B5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A7BAEDB0_B7C0_EF34_41DF_8EFA85DE4995_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A61F993B_B7C0_3734_41E2_5BA713ABC070",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B90157F3_B7C0_DB34_41D9_32B5DCB9960F_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A7AFE308_B4EA_AEC3_41DD_66A7DC4F290C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BB04EACD_B4BB_7F5D_41BD_9038A31D3AC9_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_BB082BFC_B4A7_BD43_41B1_2C859C717D42",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0_HS_1_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A6795BFF_B4E7_BD3D_41E4_1E7AF2CD548B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BB83AF46_B45B_B54F_4194_C9F5E15C588F_0_HS_4_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4D9D4D9_B7C0_5D74_41E3_55F4F5AE20C0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A5CEBE4B_BDB8_8933_41DE_97FEB1CF21DF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_0_HS_2_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4DE84E8_B7C0_5D54_41D4_A79FB50ADAAC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A646BE56_B7C0_ED7C_41A3_C43084D5CBA0_1_HS_4_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4D8B4D9_B7C0_5D74_41C6_EB5C3179E000",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A4F5ECEF_B7C0_2D2C_41B9_26ADE88F53E6_1_HS_0_0.png",
   "width": 520,
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A68304AE_B4ED_ABDF_41D3_5F711E1B386F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A4132D63_B4BA_9545_4193_1410B2F1B1AD_0_HS_3_0.png",
   "width": 520,
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A52FE8FC_B7C3_D52C_41A1_EC41487FB21C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0_HS_0_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A0E37559_B840_3F74_41E2_B8D8A5B5852E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B8BB1AF0_B7C0_3534_41DB_8A70D2D94284_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A5B4EE3C_BDB8_8954_41E3_C64F63E1EE5E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_0_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4E6E4C9_B7C0_5D54_41AA_F4B0FE7BF78E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4E6B4D9_B7C0_5D74_41C6_624A5E560B57",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A5B52E3C_BDB8_8954_41D2_E1C0ACEB1505",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BAA22BEB_B46E_9D45_41CB_9E290AC72125_0_HS_4_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4D974D9_B7C0_5D74_41D3_F02688013989",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A53E4F96_B7C0_2BFC_41D3_04C62CB9A3F7_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A52D7C4D_B465_9B5D_41D4_16A419B6775B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4E1B4C9_B7C0_5D54_419A_0BF9262730A0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BF50963F_B45B_F73D_41C8_D0B1FE7D1655_0_HS_1_0.png",
   "width": 520,
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A0E2DD7E_B4FF_953F_41D5_2F11B24CBD6E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_1_HS_0_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A60210D1_B4FA_AB45_4191_247417AF9E8C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A5C66E9E_B4FA_97FF_41DE_DB63DA5C4046_0_HS_1_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A0E3DD6E_B4FF_955F_41E5_37FEA6FD82BF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A4E4ADBF_B4AA_953D_41DA_EB987FDA7C7E_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A4D8E4D9_B7C0_5D74_41D0_7A427322F888",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A667394F_B7C0_F76C_41E6_CD14EE9B6E24_1_HS_0_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A5B34E3C_BDB8_8954_41D8_B3EA368108DB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0_HS_3_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AE4A8BD8_B847_EB74_41DF_B2F531D31FE0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A7C3F6A3_B7C0_DDD4_418B_6471FCD8F067_0_HS_4_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A6FAD2CB_B4DB_6F45_41E1_D4E311C8E183",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_1_HS_0_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AADC4D40_BCA8_8B2C_41E1_5F0424731C86",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0_HS_2_0.png",
   "width": 580,
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A6016BEC_B7C3_EB2C_41D3_22BAC0E360DD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A6EF0C59_B4DE_BB45_41E4_CCA0106AC051_0_HS_4_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AE4AEBE8_B847_EB54_41AB_E35896893181",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A7684B09_B7C1_D4D4_41CD_0490E9B38EA2_0_HS_0_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "rowCount": 6
}],
 "paddingRight": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_A560693F_BDE8_8B54_41E2_A9E40892AF63",
 "scripts": {
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getKey": function(key){  return window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player43899"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
