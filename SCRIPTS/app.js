//vue app creation
const app = Vue.createApp ({
    data() {
        return {
            //profile function elements
            profile: {
                FirstName: '',     
                LastName: '',      
                Email: '', 
                Age: '',
                ProfilePic: 'https://randomuser.me/api/portraits/women/61.jpg'   
            },
            //weather function elements
            weathersec: {
                Temperature: '',     
                Wind : '',      
                Description: '', 
                  
            },
            //dictionary function elements
            dictionarysec: {
                Word: '',
                Phonetic:'',
                Definition:'',
            }
        };
    },
    //computed method for concatenation
    computed: {
        fullName() {
            return this.FirstName + ' ' + this.LastName;
        }
    },
    //method properties
    methods: {
        //fetchprofile function
        fetchprofile() {
             // This will load data to the page when clicked on the button
            fetch('https://randomuser.me/api/portraits/women/61.jpg')
                .then(response => {
                if (response.ok){
                return response.json();
                }
                })
                .then(data => {
                this.profile.Name = $data.fullName;
                this.profile.Email = data.Email;
                this.profile.Age = data.Age;
                this.profile.ProfilePic=data.ProfilePic;
                })
                .catch(error => {
                console.log('Error fetching data');
                });      
        },

        //fetchweathersec function
        fetchweathersec() {
            // This will load the data to the page when clicked on the buttton
            fetch('https://randomuser.me/api/portraits/women/61.jpg') 
               .then(response => {
               if (response.ok){
               return response.json();
               }
               })
               .then(data => {
               this.weathersec.Temperature = data.Temperature;
               this.weathersec.Wind = data.Wind;
               this.weathersec.Description = data.Description;
               
               })
               .catch(error => {
               console.log('Error getting weather data');
               });      
       },

       //fetchdefinitionsec function
       fetchdefinition() {
           // this will load the data to the page
           .then(data => {
           this.dictionarysec.Word = data.Word;
           this.dictionarysec.Phonetic = data.Phonetic;
           this.dictionarysec.Definition = data.Definition;
           
           })
           .catch(error => {
           console.log('Error getting weather data');
           });      
        }
    }
});
    
app.mount('#app');