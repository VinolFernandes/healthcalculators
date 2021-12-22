<template>
    <div class="container-fluid m-0 p-0">
        <div id="home-page" class="full-height p-4">
            <div class="container">
                <div class="text-center pa-4 my-auto">
                    <h1 class="display-4 pa-4" id="healthcalc">Health Calculators</h1>
                    <h2 class="display-1" id="tracky">Track your health today!</h2>
                </div>
                
                <div class="text-center pa-5 my-auto">
                    <v-btn class="indigo"  x-large route='/Login'>Get Started!</v-btn>
                </div>
            </div>
        </div>
        <div id="about" class="bg-light p-3 p-md-5">
            <div class="row">
                <div class="col-lg">
                    <h4 class="text-center">BMI</h4>
                    <v-divider></v-divider>
                    <h5 class="ml-md-4 mr-md-5">
                        Body Mass Index (BMI) is a person's weight in kilograms divided
                         by the square of height in meters. A high BMI can indicate high body fatness. 
                         BMI screens for weight categories that may lead to health problems, but it does
                          not diagnose the body fatness or health of an individual.
                    </h5>
                </div>
                <div class="col-lg">
                    <h4 class="text-center">BMR</h4>
                    <v-divider></v-divider>
                    <h5 class="ml-md-4 mr-md-5">
                        Basal metabolic rate (BMR) is often used interchangeably with resting
                         metabolic rate (RMR). While BMR is a minimum number of calories required
                          for basic functions at rest, RMR — also called resting energy expenditure
                           (REE) — is the number of calories that your body burns while it’s at rest.
                    </h5>
                </div>
                <div class="col-lg">
                    <h4 class="text-center">Ideal Weight</h4>
                    <v-divider></v-divider>
                    <h5 class="ml-md-4 mr-md-5 justify">
                        Ideal weight gives off the ideal weight of an average human being
                        considering different range of inputs such as gender height age.
                        Ideal weight is mostly used in cases of different sports and the 
                        military.
                    </h5>
                </div>
                <div class="col-lg">
                    <h4 class="text-center">Body fat percentage</h4>
                    <v-divider></v-divider>
                    <h5 class="ml-md-4 mr-md-5">
                        The body fat percentage (BFP) of a human or other living being
                         is the total mass of fat divided by total body mass, multiplied
                          by 100; body fat includes essential body fat and storage body fat. 
                          Essential is necessary to maintain life and reproductive functions.
                    </h5>
                </div>
            </div>
        </div>
       <Footer/>

    </div>
</template>

<script>
import Footer from '@/components/footer'

export default({
   components:{
       Footer,
   },
   
})
</script>
<style scoped>
.full-height{
    min-height: 100vh;
}
#home-page{
    background-color: indigo;
    background:url('../assets/homebg.png') no-repeat center center;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size: cover;
}
#about{
    min-height: 40%;
}
#healthcalc{
    font-family: 'Courier New';
    color: ivory;
}
#tracky{
    font-family: 'Courier New';
    color: ivory;
}
</style>
