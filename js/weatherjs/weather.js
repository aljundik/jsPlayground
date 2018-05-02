// 4c39a0f0e7390f72
// http://api.wunderground.com/api/4c39a0f0e7390f72/conditions/q/CA/San_Francisco.json

class Weather{
    constructor(city,state) {
        this.apiKey = '4c39a0f0e7390f72';
        this.city = city;
        this.state = state;
    }

    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();
        return responseData.current_observation;
    }
    

    changeLocatoin(city,state){
        this.city = city;
        this.state= state;
    }
}