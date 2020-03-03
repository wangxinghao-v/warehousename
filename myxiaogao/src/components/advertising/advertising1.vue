<template>
    <div class="advertiding1-box">
        <div class="advertiding1">
        <div class="addvertiding1-dabg">
            <div class="addvertiding1-bgimg"> 
            </div>
        </div>
    </div>
    <br>
        <div class="adertiding1-button">
            <div class="adertiding1-adertiding1">
                广告
            </div>
            <div class="">恒大名都</div>
        </div>
    </div>
</template>

<style scoped>
    .advertiding1-box{
   
   margin:1rem 0rem;
    }
    .advertiding1{
        
         height:22vh;
        margin:0rem 0.2rem;
        position:relative;
    }   
    .advertiding1:after{
        content:"";
        display:block;
        clear:both;
        
    }
    .addvertiding1-dabg{
        width:97vw;
        height:23vh;
        border:1px solid #ddd;
        overflow:hidden;
        position:absolute;
       border-radius:7px;
       
    
    }

    .addvertiding1-bgimg{
        padding:50rem;
        height:15vh;
        width:97vw;
        background:url(../../assets/hdadvertising.png) no-repeat fixed;
        background-size:100vw 90vh;
        top:25vh;
    }
     .adertiding1-button:after{
        content:"";
        display:block;
        clear:both;
    
    } 
    .adertiding1-button>div{
        float:left
    }
    .adertiding1-adertiding1{
        margin:0rem 0.3rem; 
        width:2.1rem;
        height:1.1rem;
        border:1px solid #37a;
        border-radius:3px;
        color:#37a;}
</style>
<script>

export default {
    
    data(){
        return{

        }
    },

}
</script>
