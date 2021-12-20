<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn outlined color="teal lighten-3" dark v-on="on">Update Values</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Update</span>
        </v-card-title>
         <v-form class="px-3" ref="form">
             <v-card-text>
        <BMI/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="green" text outlined @click="submit">Save</v-btn>
        </v-card-actions>
         </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import BMI from '@/components/BMI'
export default {
  components:{
      BMI,
  }
}
</script>