<template>
  <div class="d-flex justify-content-center">
    <div class="lds-css ng-scope">
      <div class="lds-spin" style="width:100%;height:100%">
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style>
@keyframes lds-spin {
  0% {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-webkit-keyframes lds-spin {
  0% {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
.lds-spin {
  position: relative;
}
.lds-spin div > div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #31aec7;
  -webkit-animation: lds-spin 0.9s linear infinite;
  animation: lds-spin 0.9s linear infinite;
}
.lds-spin div:nth-child(1) > div {
  left: 140px;
  top: 80px;
  -webkit-animation-delay: -0.87s;
  animation-delay: -0.87s;
}
.lds-spin > div:nth-child(1) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transform-origin: 160px 100px;
  transform-origin: 160px 100px;
}
.lds-spin div:nth-child(2) > div {
  left: 138.68885606px;
  top: 92.47470146px;
  -webkit-animation-delay: -0.84s;
  animation-delay: -0.84s;
}
.lds-spin > div:nth-child(2) {
  -webkit-transform: rotate(12deg);
  transform: rotate(12deg);
  -webkit-transform-origin: 158.68885606px 112.47470146px;
  transform-origin: 158.68885606px 112.47470146px;
}
.lds-spin div:nth-child(3) > div {
  left: 134.81272748px;
  top: 104.40419858px;
  -webkit-animation-delay: -0.81s;
  animation-delay: -0.81s;
}
.lds-spin > div:nth-child(3) {
  -webkit-transform: rotate(24deg);
  transform: rotate(24deg);
  -webkit-transform-origin: 154.81272748px 124.40419858000001px;
  transform-origin: 154.81272748px 124.40419858000001px;
}
.lds-spin div:nth-child(4) > div {
  left: 128.54101964px;
  top: 115.26711512px;
  -webkit-animation-delay: -0.78s;
  animation-delay: -0.78s;
}
.lds-spin > div:nth-child(4) {
  -webkit-transform: rotate(36deg);
  transform: rotate(36deg);
  -webkit-transform-origin: 148.54101964px 135.26711512px;
  transform-origin: 148.54101964px 135.26711512px;
}
.lds-spin div:nth-child(5) > div {
  left: 120.14783635999999px;
  top: 124.58868949999999px;
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.lds-spin > div:nth-child(5) {
  -webkit-transform: rotate(48deg);
  transform: rotate(48deg);
  -webkit-transform-origin: 140.14783635999999px 144.5886895px;
  transform-origin: 140.14783635999999px 144.5886895px;
}
.lds-spin div:nth-child(6) > div {
  left: 110px;
  top: 131.96152424000002px;
  -webkit-animation-delay: -0.72s;
  animation-delay: -0.72s;
}
.lds-spin > div:nth-child(6) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
  -webkit-transform-origin: 130px 151.96152424000002px;
  transform-origin: 130px 151.96152424000002px;
}
.lds-spin div:nth-child(7) > div {
  left: 98.54101964px;
  top: 137.06339096px;
  -webkit-animation-delay: -0.69s;
  animation-delay: -0.69s;
}
.lds-spin > div:nth-child(7) {
  -webkit-transform: rotate(72deg);
  transform: rotate(72deg);
  -webkit-transform-origin: 118.54101964px 157.06339096px;
  transform-origin: 118.54101964px 157.06339096px;
}
.lds-spin div:nth-child(8) > div {
  left: 86.27170778px;
  top: 139.67131369999998px;
  -webkit-animation-delay: -0.66s;
  animation-delay: -0.66s;
}
.lds-spin > div:nth-child(8) {
  -webkit-transform: rotate(84deg);
  transform: rotate(84deg);
  -webkit-transform-origin: 106.27170778px 159.67131369999998px;
  transform-origin: 106.27170778px 159.67131369999998px;
}
.lds-spin div:nth-child(9) > div {
  left: 73.72829222px;
  top: 139.67131369999998px;
  -webkit-animation-delay: -0.63s;
  animation-delay: -0.63s;
}
.lds-spin > div:nth-child(9) {
  -webkit-transform: rotate(96deg);
  transform: rotate(96deg);
  -webkit-transform-origin: 93.72829222px 159.67131369999998px;
  transform-origin: 93.72829222px 159.67131369999998px;
}
.lds-spin div:nth-child(10) > div {
  left: 61.45898036px;
  top: 137.06339096px;
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.lds-spin > div:nth-child(10) {
  -webkit-transform: rotate(108deg);
  transform: rotate(108deg);
  -webkit-transform-origin: 81.45898036px 157.06339096px;
  transform-origin: 81.45898036px 157.06339096px;
}
.lds-spin div:nth-child(11) > div {
  left: 50px;
  top: 131.96152424000002px;
  -webkit-animation-delay: -0.57s;
  animation-delay: -0.57s;
}
.lds-spin > div:nth-child(11) {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-transform-origin: 70px 151.96152424000002px;
  transform-origin: 70px 151.96152424000002px;
}
.lds-spin div:nth-child(12) > div {
  left: 39.85216364px;
  top: 124.58868949999999px;
  -webkit-animation-delay: -0.54s;
  animation-delay: -0.54s;
}
.lds-spin > div:nth-child(12) {
  -webkit-transform: rotate(132deg);
  transform: rotate(132deg);
  -webkit-transform-origin: 59.85216364px 144.5886895px;
  transform-origin: 59.85216364px 144.5886895px;
}
.lds-spin div:nth-child(13) > div {
  left: 31.458980359999998px;
  top: 115.26711512px;
  -webkit-animation-delay: -0.51s;
  animation-delay: -0.51s;
}
.lds-spin > div:nth-child(13) {
  -webkit-transform: rotate(144deg);
  transform: rotate(144deg);
  -webkit-transform-origin: 51.45898036px 135.26711512px;
  transform-origin: 51.45898036px 135.26711512px;
}
.lds-spin div:nth-child(14) > div {
  left: 25.18727252px;
  top: 104.40419858px;
  -webkit-animation-delay: -0.48s;
  animation-delay: -0.48s;
}
.lds-spin > div:nth-child(14) {
  -webkit-transform: rotate(156deg);
  transform: rotate(156deg);
  -webkit-transform-origin: 45.18727251999999px 124.40419858000001px;
  transform-origin: 45.18727251999999px 124.40419858000001px;
}
.lds-spin div:nth-child(15) > div {
  left: 21.31114394px;
  top: 92.47470146px;
  -webkit-animation-delay: -0.45s;
  animation-delay: -0.45s;
}
.lds-spin > div:nth-child(15) {
  -webkit-transform: rotate(168deg);
  transform: rotate(168deg);
  -webkit-transform-origin: 41.31114394px 112.47470146px;
  transform-origin: 41.31114394px 112.47470146px;
}
.lds-spin div:nth-child(16) > div {
  left: 20px;
  top: 80px;
  -webkit-animation-delay: -0.42s;
  animation-delay: -0.42s;
}
.lds-spin > div:nth-child(16) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-transform-origin: 40px 100px;
  transform-origin: 40px 100px;
}
.lds-spin div:nth-child(17) > div {
  left: 21.31114394px;
  top: 67.52529854px;
  -webkit-animation-delay: -0.39s;
  animation-delay: -0.39s;
}
.lds-spin > div:nth-child(17) {
  -webkit-transform: rotate(192deg);
  transform: rotate(192deg);
  -webkit-transform-origin: 41.31114394px 87.52529854px;
  transform-origin: 41.31114394px 87.52529854px;
}
.lds-spin div:nth-child(18) > div {
  left: 25.18727252px;
  top: 55.59580142px;
  -webkit-animation-delay: -0.36s;
  animation-delay: -0.36s;
}
.lds-spin > div:nth-child(18) {
  -webkit-transform: rotate(204deg);
  transform: rotate(204deg);
  -webkit-transform-origin: 45.18727251999999px 75.59580142px;
  transform-origin: 45.18727251999999px 75.59580142px;
}
.lds-spin div:nth-child(19) > div {
  left: 31.458980359999998px;
  top: 44.73288488px;
  -webkit-animation-delay: -0.33s;
  animation-delay: -0.33s;
}
.lds-spin > div:nth-child(19) {
  -webkit-transform: rotate(216deg);
  transform: rotate(216deg);
  -webkit-transform-origin: 51.45898036px 64.73288488px;
  transform-origin: 51.45898036px 64.73288488px;
}
.lds-spin div:nth-child(20) > div {
  left: 39.85216364px;
  top: 35.4113105px;
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.lds-spin > div:nth-child(20) {
  -webkit-transform: rotate(228deg);
  transform: rotate(228deg);
  -webkit-transform-origin: 59.85216364px 55.4113105px;
  transform-origin: 59.85216364px 55.4113105px;
}
.lds-spin div:nth-child(21) > div {
  left: 50px;
  top: 28.038475759999997px;
  -webkit-animation-delay: -0.27s;
  animation-delay: -0.27s;
}
.lds-spin > div:nth-child(21) {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
  -webkit-transform-origin: 70px 48.03847576px;
  transform-origin: 70px 48.03847576px;
}
.lds-spin div:nth-child(22) > div {
  left: 61.45898036px;
  top: 22.93660904px;
  -webkit-animation-delay: -0.24s;
  animation-delay: -0.24s;
}
.lds-spin > div:nth-child(22) {
  -webkit-transform: rotate(252deg);
  transform: rotate(252deg);
  -webkit-transform-origin: 81.45898036px 42.93660904px;
  transform-origin: 81.45898036px 42.93660904px;
}
.lds-spin div:nth-child(23) > div {
  left: 73.72829222px;
  top: 20.3286863px;
  -webkit-animation-delay: -0.21s;
  animation-delay: -0.21s;
}
.lds-spin > div:nth-child(23) {
  -webkit-transform: rotate(264deg);
  transform: rotate(264deg);
  -webkit-transform-origin: 93.72829222px 40.3286863px;
  transform-origin: 93.72829222px 40.3286863px;
}
.lds-spin div:nth-child(24) > div {
  left: 86.27170778px;
  top: 20.3286863px;
  -webkit-animation-delay: -0.18s;
  animation-delay: -0.18s;
}
.lds-spin > div:nth-child(24) {
  -webkit-transform: rotate(276deg);
  transform: rotate(276deg);
  -webkit-transform-origin: 106.27170778px 40.3286863px;
  transform-origin: 106.27170778px 40.3286863px;
}
.lds-spin div:nth-child(25) > div {
  left: 98.54101964px;
  top: 22.93660904px;
  -webkit-animation-delay: -0.15s;
  animation-delay: -0.15s;
}
.lds-spin > div:nth-child(25) {
  -webkit-transform: rotate(288deg);
  transform: rotate(288deg);
  -webkit-transform-origin: 118.54101964px 42.93660904px;
  transform-origin: 118.54101964px 42.93660904px;
}
.lds-spin div:nth-child(26) > div {
  left: 110px;
  top: 28.038475759999997px;
  -webkit-animation-delay: -0.12s;
  animation-delay: -0.12s;
}
.lds-spin > div:nth-child(26) {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
  -webkit-transform-origin: 130px 48.03847576px;
  transform-origin: 130px 48.03847576px;
}
.lds-spin div:nth-child(27) > div {
  left: 120.14783635999999px;
  top: 35.4113105px;
  -webkit-animation-delay: -0.09s;
  animation-delay: -0.09s;
}
.lds-spin > div:nth-child(27) {
  -webkit-transform: rotate(312deg);
  transform: rotate(312deg);
  -webkit-transform-origin: 140.14783635999999px 55.4113105px;
  transform-origin: 140.14783635999999px 55.4113105px;
}
.lds-spin div:nth-child(28) > div {
  left: 128.54101964px;
  top: 44.73288488px;
  -webkit-animation-delay: -0.06s;
  animation-delay: -0.06s;
}
.lds-spin > div:nth-child(28) {
  -webkit-transform: rotate(324deg);
  transform: rotate(324deg);
  -webkit-transform-origin: 148.54101964px 64.73288488px;
  transform-origin: 148.54101964px 64.73288488px;
}
.lds-spin div:nth-child(29) > div {
  left: 134.81272748px;
  top: 55.59580142px;
  -webkit-animation-delay: -0.03s;
  animation-delay: -0.03s;
}
.lds-spin > div:nth-child(29) {
  -webkit-transform: rotate(336deg);
  transform: rotate(336deg);
  -webkit-transform-origin: 154.81272748px 75.59580142px;
  transform-origin: 154.81272748px 75.59580142px;
}
.lds-spin div:nth-child(30) > div {
  left: 138.68885606px;
  top: 67.52529854px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.lds-spin > div:nth-child(30) {
  -webkit-transform: rotate(348deg);
  transform: rotate(348deg);
  -webkit-transform-origin: 158.68885606px 87.52529854px;
  transform-origin: 158.68885606px 87.52529854px;
}
.lds-spin div:nth-child(31) > div {
  left: 140px;
  top: 80px;
  -webkit-animation-delay: 0.03s;
  animation-delay: 0.03s;
}
.lds-spin > div:nth-child(31) {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transform-origin: 160px 100px;
  transform-origin: 160px 100px;
}
.lds-spin {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
</style>

