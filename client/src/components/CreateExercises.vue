<template>
  <v-card class="mx-auto" max-width="800px">
      <v-card-title>Create new exercise log:</v-card-title>
      <v-form
       ref="form"
        v-model="valid"
        lazy-validation
        class="px-3"
        >
        <v-text-field v-model="username" label="Username" :rules="usernameRules"></v-text-field>
        <v-text-field v-model="description" label="Description" :rules="descriptionRules"></v-text-field>
        <v-text-field v-model="duration" label="Duration" :rules="durationRules"></v-text-field>

        <v-btn outlined color="indigo" class="mx-0 mt-3 mb-3">Submit</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
    data: () => {
        return {
            username:'',
            usernameRules: [
                v => !!v || 'Username is required'
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'Username is required'
            ],
            duration: 0,
            durationRules: [
                v => !!v || 'Username is required'
            ]
        }
    }
}
</script>