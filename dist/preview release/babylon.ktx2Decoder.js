!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.KTX2DECODER=t():e.KTX2DECODER=t()}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";r.d(t,"b",(function(){return C})),r.d(t,"j",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"o",(function(){return n})),r.d(t,"p",(function(){return a})),r.d(t,"k",(function(){return s})),r.d(t,"l",(function(){return c})),r.d(t,"m",(function(){return d})),r.d(t,"n",(function(){return U})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return _})),r.d(t,"f",(function(){return g})),r.d(t,"h",(function(){return b})),r.d(t,"g",(function(){return B})),r.d(t,"i",(function(){return T}));var n,a,o=function(){function e(e,t,r){e.buffer?this._dataView=new DataView(e.buffer,e.byteOffset+(null!=t?t:0),null!=r?r:e.byteLength):this._dataView=new DataView(e,null!=t?t:0,null!=r?r:e.byteLength),this._dataByteOffset=0}return Object.defineProperty(e.prototype,"byteOffset",{get:function(){return this._dataByteOffset},enumerable:!1,configurable:!0}),e.prototype.readUint8=function(){var e=this._dataView.getUint8(this._dataByteOffset);return this._dataByteOffset+=1,e},e.prototype.readInt8=function(){var e=this._dataView.getInt8(this._dataByteOffset);return this._dataByteOffset+=1,e},e.prototype.readUint16=function(){var e=this._dataView.getUint16(this._dataByteOffset,!0);return this._dataByteOffset+=2,e},e.prototype.readInt16=function(){var e=this._dataView.getInt16(this._dataByteOffset,!0);return this._dataByteOffset+=2,e},e.prototype.readUint32=function(){var e=this._dataView.getUint32(this._dataByteOffset,!0);return this._dataByteOffset+=4,e},e.prototype.readInt32=function(){var e=this._dataView.getInt32(this._dataByteOffset,!0);return this._dataByteOffset+=4,e},e.prototype.readUint64=function(){var e=this._dataView.getUint32(this._dataByteOffset,!0),t=this._dataView.getUint32(this._dataByteOffset+4,!0),r=e+Math.pow(2,32)*t;return this._dataByteOffset+=8,r},e.prototype.readUint8Array=function(e){var t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._dataByteOffset,e);return this._dataByteOffset+=e,t},e.prototype.skipBytes=function(e){return this._dataByteOffset+=e,this},e}();!function(e){e[e.ETC1S=0]="ETC1S",e[e.UASTC4x4=1]="UASTC4x4"}(n||(n={})),function(e){e[e.ASTC_4x4_RGBA=0]="ASTC_4x4_RGBA",e[e.BC7_RGBA=1]="BC7_RGBA",e[e.BC3_RGBA=2]="BC3_RGBA",e[e.BC1_RGB=3]="BC1_RGB",e[e.PVRTC1_4_RGBA=4]="PVRTC1_4_RGBA",e[e.PVRTC1_4_RGB=5]="PVRTC1_4_RGB",e[e.ETC2_RGBA=6]="ETC2_RGBA",e[e.ETC1_RGB=7]="ETC1_RGB",e[e.RGBA32=8]="RGBA32"}(a||(a={}));var i,s=function(){function e(){}return e.CanTranscode=function(e,t,r){return!1},e.prototype.getName=function(){return e.Name},e.prototype.initialize=function(){},e.prototype.needMemoryManager=function(){return!1},e.prototype.setMemoryManager=function(e){},e.prototype.transcode=function(e,t,r,n,a,o,i,s,u){return Promise.resolve(null)},e.Name="Transcoder",e}();!function(e){e[e.None=0]="None",e[e.BasisLZ=1]="BasisLZ",e[e.ZStandard=2]="ZStandard",e[e.ZLib=3]="ZLib"}(i||(i={}));var u=function(){function e(e){this._data=e}return Object.defineProperty(e.prototype,"data",{get:function(){return this._data},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"header",{get:function(){return this._header},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"levels",{get:function(){return this._levels},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dfdBlock",{get:function(){return this._dfdBlock},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"supercompressionGlobalData",{get:function(){return this._supercompressionGlobalData},enumerable:!1,configurable:!0}),e.prototype.isValid=function(){return e.IsValid(this._data)},e.prototype.parse=function(){var e=12,t=new o(this._data,e,68),r=this._header={vkFormat:t.readUint32(),typeSize:t.readUint32(),pixelWidth:t.readUint32(),pixelHeight:t.readUint32(),pixelDepth:t.readUint32(),layerCount:t.readUint32(),faceCount:t.readUint32(),levelCount:t.readUint32(),supercompressionScheme:t.readUint32(),dfdByteOffset:t.readUint32(),dfdByteLength:t.readUint32(),kvdByteOffset:t.readUint32(),kvdByteLength:t.readUint32(),sgdByteOffset:t.readUint64(),sgdByteLength:t.readUint64()};if(r.pixelDepth>0)throw new Error("Failed to parse KTX2 file - Only 2D textures are currently supported.");if(r.layerCount>1)throw new Error("Failed to parse KTX2 file - Array textures are not currently supported.");if(r.faceCount>1)throw new Error("Failed to parse KTX2 file - Cube textures are not currently supported.");e+=t.byteOffset;for(var n=Math.max(1,r.levelCount),a=new o(this._data,e,3*n*8),i=this._levels=[];n--;)i.push({byteOffset:a.readUint64(),byteLength:a.readUint64(),uncompressedByteLength:a.readUint64()});e+=a.byteOffset;var s=new o(this._data,r.dfdByteOffset,r.dfdByteLength),u=this._dfdBlock={vendorId:s.skipBytes(4).readUint16(),descriptorType:s.readUint16(),versionNumber:s.readUint16(),descriptorBlockSize:s.readUint16(),colorModel:s.readUint8(),colorPrimaries:s.readUint8(),transferFunction:s.readUint8(),flags:s.readUint8(),texelBlockDimension:{x:s.readUint8()+1,y:s.readUint8()+1,z:s.readUint8()+1,w:s.readUint8()+1},bytesPlane:[s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8()],numSamples:0,samples:new Array};u.numSamples=(u.descriptorBlockSize-24)/16;for(var d=0;d<u.numSamples;d++){var c={bitOffset:s.readUint16(),bitLength:s.readUint8()+1,channelType:s.readUint8(),channelFlags:0,samplePosition:[s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8()],sampleLower:s.readUint32(),sampleUpper:s.readUint32()};c.channelFlags=(240&c.channelType)>>4,c.channelType=15&c.channelType,u.samples.push(c)}var f=this._supercompressionGlobalData={};if(r.sgdByteLength>0){var l=new o(this._data,r.sgdByteOffset,r.sgdByteLength);f.endpointCount=l.readUint16(),f.selectorCount=l.readUint16(),f.endpointsByteLength=l.readUint32(),f.selectorsByteLength=l.readUint32(),f.tablesByteLength=l.readUint32(),f.extendedByteLength=l.readUint32(),f.imageDescs=[];var h=this._getImageCount();for(d=0;d<h;d++)f.imageDescs.push({imageFlags:l.readUint32(),rgbSliceByteOffset:l.readUint32(),rgbSliceByteLength:l.readUint32(),alphaSliceByteOffset:l.readUint32(),alphaSliceByteLength:l.readUint32()});var p=r.sgdByteOffset+l.byteOffset,y=p+f.endpointsByteLength,m=y+f.selectorsByteLength,_=m+f.tablesByteLength;f.endpointsData=new Uint8Array(this._data.buffer,this._data.byteOffset+p,f.endpointsByteLength),f.selectorsData=new Uint8Array(this._data.buffer,this._data.byteOffset+y,f.selectorsByteLength),f.tablesData=new Uint8Array(this._data.buffer,this._data.byteOffset+m,f.tablesByteLength),f.extendedData=new Uint8Array(this._data.buffer,this._data.byteOffset+_,f.extendedByteLength)}},e.prototype._getImageCount=function(){for(var e=Math.max(this._header.pixelDepth,1),t=1;t<this._header.levelCount;t++)e+=Math.max(this._header.pixelDepth>>t,1);return Math.max(this._header.layerCount,1)*this._header.faceCount*e},Object.defineProperty(e.prototype,"textureFormat",{get:function(){return 166===this._dfdBlock.colorModel?n.UASTC4x4:n.ETC1S},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasAlpha",{get:function(){switch(this.textureFormat){case n.ETC1S:return 2===this._dfdBlock.numSamples&&(15===this._dfdBlock.samples[0].channelType||15===this._dfdBlock.samples[1].channelType);case n.UASTC4x4:return 3===this._dfdBlock.samples[0].channelType}return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"needZSTDDecoder",{get:function(){return this._header.supercompressionScheme===i.ZStandard},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isInGammaSpace",{get:function(){return 2===this._dfdBlock.transferFunction},enumerable:!1,configurable:!0}),e.IsValid=function(e){if(e.byteLength>=12){var t=new Uint8Array(e.buffer,e.byteOffset,12);if(171===t[0]&&75===t[1]&&84===t[2]&&88===t[3]&&32===t[4]&&50===t[5]&&48===t[6]&&187===t[7]&&13===t[8]&&10===t[9]&&26===t[10]&&10===t[11])return!0}return!1},e}(),d=function(){function e(t){void 0===t&&(t=e.InitialMemoryPages),this._numPages=t,this._memory=new WebAssembly.Memory({initial:this._numPages}),this._memoryViewByteLength=this._numPages<<16,this._memoryViewOffset=0,this._memoryView=new Uint8Array(this._memory.buffer,this._memoryViewOffset,this._memoryViewByteLength)}return e.LoadWASM=function(e){if(this.LoadBinariesFromCurrentThread)return new Promise((function(t,r){fetch(e).then((function(t){if(t.ok)return t.arrayBuffer();throw new Error('Could not fetch the wasm component from "'+e+'": '+t.status+" - "+t.statusText)})).then((function(e){return t(e)})).catch((function(e){r(e)}))}));var t=this._RequestId++;return new Promise((function(r){var n=function(e){"wasmLoaded"===e.data.action&&e.data.id===t&&(self.removeEventListener("message",n),r(e.data.wasmBinary))};self.addEventListener("message",n),postMessage({action:"loadWASM",path:e,id:t})}))},Object.defineProperty(e.prototype,"wasmMemory",{get:function(){return this._memory},enumerable:!1,configurable:!0}),e.prototype.getMemoryView=function(e,t,r){return void 0===t&&(t=0),r=null!=r?r:e<<16,this._numPages<e?(this._memory.grow(e-this._numPages),this._numPages=e,this._memoryView=new Uint8Array(this._memory.buffer,t,r),this._memoryViewByteLength=r,this._memoryViewOffset=t):(this._memoryView=new Uint8Array(this._memory.buffer,t,r),this._memoryViewByteLength=r,this._memoryViewOffset=t),this._memoryView},e.LoadBinariesFromCurrentThread=!0,e.InitialMemoryPages=16,e._RequestId=0,e}(),c=function(){function e(){}return e.RegisterTranscoder=function(t){e._Transcoders.push(t)},e.prototype.findTranscoder=function(t,r,o,i){for(var s=null,u=n[t]+"_"+a[r],c=0;c<e._Transcoders.length;++c)if(e._Transcoders[c].CanTranscode(t,r,o)&&(!i||i.indexOf(e._Transcoders[c].Name)<0)){(s=this._getExistingTranscoder(u,e._Transcoders[c].Name))||((s=new e._Transcoders[c]).initialize(),s.needMemoryManager()&&(this._wasmMemoryManager||(this._wasmMemoryManager=new d),s.setMemoryManager(this._wasmMemoryManager)),e._transcoderInstances[u]||(e._transcoderInstances[u]=[]),e._transcoderInstances[u].push(s));break}return s},e.prototype._getExistingTranscoder=function(t,r){var n=e._transcoderInstances[t];if(n)for(var a=0;a<n.length;++a){var o=n[a];if(r===o.getName())return o}return null},e._Transcoders=[],e._transcoderInstances={},e}(),f=function(e,t){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function l(e,t){function r(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}Object.create;Object.create;var h,p,y,m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype._loadModule=function(){var e=this;return this._modulePromise||(this._modulePromise=d.LoadWASM(this._modulePath).then((function(t){return new Promise((function(r){WebAssembly.instantiate(t,{env:{memory:e._memoryManager.wasmMemory}}).then((function(e){r({module:e.instance.exports})}))}))}))),this._modulePromise},Object.defineProperty(t.prototype,"memoryManager",{get:function(){return this._memoryManager},enumerable:!1,configurable:!0}),t.prototype.setModulePath=function(e){this._modulePath=e},t.prototype.initialize=function(){this._transcodeInPlace=!0},t.prototype.needMemoryManager=function(){return!0},t.prototype.setMemoryManager=function(e){this._memoryManager=e},t.prototype.transcode=function(e,t,r,n,a,o,i,s,u){var d=this;return this._loadModule().then((function(e){var t=e.module,r=d._prepareTranscoding(n,a,o,u),i=r[0],s=r[1],c=r[2];return 0===t.transcode(c)?d._transcodeInPlace?i.slice():s.slice():null}))},t.prototype._prepareTranscoding=function(e,t,r,n,a){void 0===a&&(a=!1);var o=(e+3>>2)*(t+3>>2);a&&(r=e*(t+3>>2)*4*4);var i=1+(16*o+65535+(this._transcodeInPlace?0:r)>>16),s=this.memoryManager.getMemoryView(i,65536,16*o),u=this._transcodeInPlace?null:new Uint8Array(this._memoryManager.wasmMemory.buffer,65536+16*o,a?e*t*4:r);return s.set(n),[s,u,o]},t}(s),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,r){return e===n.UASTC4x4&&t===a.ASTC_4x4_RGBA},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this.setModulePath(t.WasmModuleURL)},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_astc.wasm",t.Name="UniversalTranscoder_UASTC_ASTC",t}(m),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,r){return e===n.UASTC4x4&&t===a.BC7_RGBA},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this.setModulePath(t.WasmModuleURL)},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_bc7.wasm",t.Name="UniversalTranscoder_UASTC_BC7",t}(m),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,r){return e===n.UASTC4x4&&t===a.RGBA32&&!r},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this._transcodeInPlace=!1,this.setModulePath(t.WasmModuleURL)},t.prototype.transcode=function(e,t,r,n,a,o,i,s,u){var d=this;return this._loadModule().then((function(e){var t=e.module,r=d._prepareTranscoding(n,a,o,u,!0)[1];return 0===t.decodeRGBA32(n,a)?r.slice():null}))},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_rgba32_unorm.wasm",t.Name="UniversalTranscoder_UASTC_RGBA_UNORM",t}(m),B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,r){return e===n.UASTC4x4&&t===a.RGBA32&&r},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this._transcodeInPlace=!1,this.setModulePath(t.WasmModuleURL)},t.prototype.transcode=function(e,t,r,n,a,o,i,s,u){var d=this;return this._loadModule().then((function(e){var t=e.module,r=d._prepareTranscoding(n,a,o,u,!0)[1];return 0===t.decodeRGBA32(n,a)?r.slice():null}))},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_rgba32_srgb.wasm",t.Name="UniversalTranscoder_UASTC_RGBA_SRGB",t}(m),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.getName=function(){return t.Name},t.prototype._getMSCBasisTranscoder=function(){var e=this;return this._mscBasisTranscoderPromise||(this._mscBasisTranscoderPromise=d.LoadWASM(t.WasmModuleURL).then((function(r){return t.UseFromWorkerThread&&importScripts(t.JSModuleURL),new Promise((function(t){MSC_TRANSCODER({wasmBinary:r}).then((function(r){r.initTranscoders(),e._mscBasisModule=r,t()}))}))}))),this._mscBasisTranscoderPromise},t.CanTranscode=function(e,t,r){return!0},t.prototype.transcode=function(e,t,r,o,i,s,u,d,c){var f=this;return this._getMSCBasisTranscoder().then((function(){var l,h=f._mscBasisModule,p=e===n.UASTC4x4?new h.UastcImageTranscoder:new h.BasisLzEtc1sImageTranscoder,y=e===n.UASTC4x4?h.TextureFormat.UASTC4x4:h.TextureFormat.ETC1S,m=new h.ImageInfo(y,o,i,r),_=h.TranscodeTarget[a[t]];if(!h.isFormatSupported(_,y))throw new Error('MSCTranscoder: Transcoding from "'+n[e]+'" to "'+a[t]+'" not supported by current transcoder build.');if(e===n.ETC1S){var g=u.supercompressionGlobalData;p.decodePalettes(g.endpointCount,g.endpointsData,g.selectorCount,g.selectorsData),p.decodeTables(g.tablesData),m.flags=d.imageFlags,m.rgbByteOffset=0,m.rgbByteLength=d.rgbSliceByteLength,m.alphaByteOffset=d.alphaSliceByteOffset>0?d.rgbSliceByteLength:0,m.alphaByteLength=d.alphaSliceByteLength,l=p.transcodeImage(_,c,m,0,!1)}else m.flags=0,m.rgbByteOffset=0,m.rgbByteLength=s,m.alphaByteOffset=0,m.alphaByteLength=0,l=p.transcodeImage(_,c,m,0,u.hasAlpha,!1);if(l&&void 0!==l.transcodedImage){var b=l.transcodedImage.get_typed_memory_view().slice();return l.transcodedImage.delete(),b}return null}))},t.JSModuleURL="https://preview.babylonjs.com/ktx2Transcoders/msc_basis_transcoder.js",t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/msc_basis_transcoder.wasm",t.UseFromWorkerThread=!0,t.Name="MSCTranscoder",t}(s),w={env:{emscripten_notify_memory_growth:function(e){y=new Uint8Array(p.exports.memory.buffer)}}},U=function(){function e(){}return e.prototype.init=function(){return h||(h="undefined"!=typeof fetch?fetch(e.WasmModuleURL).then((function(e){if(e.ok)return e.arrayBuffer();throw new Error("Could not fetch the wasm component for the Zstandard decompression lib: "+e.status+" - "+e.statusText)})).then((function(e){return WebAssembly.instantiate(e,w)})).then(this._init):WebAssembly.instantiateStreaming(fetch(e.WasmModuleURL),w).then(this._init))},e.prototype._init=function(e){p=e.instance,w.env.emscripten_notify_memory_growth(0)},e.prototype.decode=function(e,t){if(void 0===t&&(t=0),!p)throw new Error("ZSTDDecoder: Await .init() before decoding.");var r=e.byteLength,n=p.exports.malloc(r);y.set(e,n),t=t||Number(p.exports.ZSTD_findDecompressedSize(n,r));var a=p.exports.malloc(t),o=p.exports.ZSTD_decompress(a,t,n,r),i=y.slice(a,a+o);return p.exports.free(n),p.exports.free(a),i},e.WasmModuleURL="https://preview.babylonjs.com/zstddec.wasm",e}(),v=function(e){return 0==(e&e-1)&&0!==e},C=function(){function e(){this._transcoderMgr=new c}return e.prototype.decode=function(e,t,r){var n=this;return Promise.resolve().then((function(){var a=new u(e);if(!a.isValid())throw new Error("Invalid KT2 file: wrong signature");return a.parse(),a.needZSTDDecoder?(n._zstdDecoder||(n._zstdDecoder=new U),n._zstdDecoder.init().then((function(){return n._decodeData(a,t,r)}))):n._decodeData(a,t,r)}))},e.prototype._decodeData=function(e,t,r){var o=e.header.pixelWidth,s=e.header.pixelHeight,u=e.textureFormat,d=v(o)&&v(s),c=-1,f=-1,l=!0;(null==r?void 0:r.forceRGBA)?(c=a.RGBA32,f=32856,l=!1):t.astc?(c=a.ASTC_4x4_RGBA,f=37808):t.bptc?(c=a.BC7_RGBA,f=36492):(null==r?void 0:r.useRGBAIfASTCBC7NotAvailableWhenUASTC)&&u===n.UASTC4x4?(c=a.RGBA32,f=32856,l=!1):t.s3tc?(c=e.hasAlpha?a.BC3_RGBA:a.BC1_RGB,f=e.hasAlpha?33779:33777):t.pvrtc&&d?(c=e.hasAlpha?a.PVRTC1_4_RGBA:a.PVRTC1_4_RGB,f=e.hasAlpha?35842:35840):t.etc2?(c=e.hasAlpha?a.ETC2_RGBA:a.ETC1_RGB,f=e.hasAlpha?37496:37492):t.etc1?(c=a.ETC1_RGB,f=36196):(c=a.RGBA32,f=32856,l=!1);var h=this._transcoderMgr.findTranscoder(u,c,e.isInGammaSpace,null==r?void 0:r.bypassTranscoders);if(null===h)throw new Error('no transcoder found to transcode source texture format "'+n[u]+'" to format "'+a[c]+'"');for(var p=[],y=[],m=[],_={width:0,height:0,transcodedFormat:f,mipmaps:p,isInGammaSpace:e.isInGammaSpace,transcoderName:h.getName()},g=0,b=0;b<e.header.levelCount;b++){b>0&&(g+=Math.max(e.header.layerCount,1)*e.header.faceCount*Math.max(e.header.pixelDepth>>b-1,1));var B=Math.floor(o/(1<<b)),T=Math.floor(s/(1<<b)),w=e.header.faceCount,U=(B+3>>2)*(T+3>>2)*e.dfdBlock.bytesPlane[0],C=e.levels[b].uncompressedByteLength,A=e.data.buffer,S=e.levels[b].byteOffset+e.data.byteOffset,M=0;e.header.supercompressionScheme===i.ZStandard&&(A=this._zstdDecoder.decode(new Uint8Array(A,S,e.levels[b].byteLength),C),S=0),0===b&&(_.width=l?B+3&-4:B,_.height=l?T+3&-4:T);for(var O=function(t){var r=void 0,n=null;e.header.supercompressionScheme===i.BasisLZ?(n=e.supercompressionGlobalData.imageDescs[g+t],r=new Uint8Array(A,S+n.rgbSliceByteOffset,n.rgbSliceByteLength+n.alphaSliceByteLength)):(r=new Uint8Array(A,S+M,U),M+=U);var a={data:null,width:B,height:T},o=h.transcode(u,c,b,B,T,C,e,n,r).then((function(e){return a.data=e,e&&m.push(e.buffer),e})).catch((function(e){var t;return _.errors=null!==(t=_.errors)&&void 0!==t?t:"",_.errors+=e+"\n",null}));y.push(o),p.push(a)},R=0;R<w;R++)O(R)}return Promise.all(y).then((function(){return _}))},e}();c.RegisterTranscoder(_),c.RegisterTranscoder(g),c.RegisterTranscoder(b),c.RegisterTranscoder(B),c.RegisterTranscoder(T)},function(e,t,r){"use strict";r.r(t),function(e){var n=r(0);r.d(t,"KTX2Decoder",(function(){return n.b})),r.d(t,"SupercompressionScheme",(function(){return n.j})),r.d(t,"KTX2FileReader",(function(){return n.c})),r.d(t,"sourceTextureFormat",(function(){return n.o})),r.d(t,"transcodeTarget",(function(){return n.p})),r.d(t,"Transcoder",(function(){return n.k})),r.d(t,"TranscoderManager",(function(){return n.l})),r.d(t,"WASMMemoryManager",(function(){return n.m})),r.d(t,"ZSTDDecoder",(function(){return n.n})),r.d(t,"DataReader",(function(){return n.a})),r.d(t,"LiteTranscoder",(function(){return n.d})),r.d(t,"LiteTranscoder_UASTC_ASTC",(function(){return n.e})),r.d(t,"LiteTranscoder_UASTC_BC7",(function(){return n.f})),r.d(t,"LiteTranscoder_UASTC_RGBA_UNORM",(function(){return n.h})),r.d(t,"LiteTranscoder_UASTC_RGBA_SRGB",(function(){return n.g})),r.d(t,"MSCTranscoder",(function(){return n.i}));var a=void 0!==e?e:"undefined"!=typeof window?window:void 0;void 0!==a&&(a.KTX2DECODER=n.b)}.call(this,r(2))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r}])}));