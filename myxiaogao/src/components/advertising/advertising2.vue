<template>
    <div class="advertising2">
        <h2>新精英旗舰座驾INSPIPE，芯混动，新境界</h2>
        <div>
            <img style="border-radius:7px;; width:100%; height:100%" src="../../assets/choiceness/dongfengbengtain.jpg" >
        </div>
        <div class="adertiding2-button">
            <div class="adertiding2-adertiding2">
                广告
            </div>
            <div class="">东风本田</div>
        </div>
    </div>
</template>
<script>
export default {
    props:[""],
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    .advertising2{
        margin:0.5rem 0rem;
        padding:0.5rem 0rem;
        border:1px solid #dddddd;
         border-radius:7px;
         text-align:center;
    }
    .advertising2>div:nth-child(2){
        height:30vh;
        
        margin:0.5rem 0rem;
        border-radius:7px;
    }
      .adertiding2-button:after{
        content:"";
        display:block;
        clear:both;
    
    } 
    .adertiding2-button>div{
        float:left
    }
    .adertiding2-adertiding2{
        margin:0rem 0.3rem; 
        width:2.1rem;
        height:1.1rem;
        border:1px solid #37a;
        border-radius:3px;
        color:#37a;}
</style>