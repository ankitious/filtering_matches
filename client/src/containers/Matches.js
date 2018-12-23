
import React, { Component } from 'react';
import Match from "../components/Match";
import {fetchMatches} from "../api/fetchMatches";
import {fetchFilterData} from "../api/fetchFilterData";

const filters = {
    photos : null,
    contacts : null,
    favourite : null,
    compatibility : null,
    age : null,
    height : null,

};

const booleanFilters = ['Photos', 'Contacts', 'Favourite'];

class Matches extends Component {

    state = {
        matches : [],
        compatibility:100,
        age : 95,
        height : 210
    };

    constructor(props) {
        super(props);
        this.applyFilter = this.applyFilter.bind(this);
        this.radioFilter = this.radioFilter.bind(this);
        this.rangeFilter = this.rangeFilter.bind(this);
    }
    componentDidMount() {
        fetchMatches().then(
            (res) => {
                console.log(res)
                this.setState({matches : res.data})
            },
            (err) => {
                console.log(err);
             }
            )
    }

    applyFilter() {
        fetchFilterData(filters).then((res) => {
                this.setState({matches : res.data})
            },
            (err) => {
                console.log(err);
            } )
    }
    radioFilter(e) {
      console.log(e.target.value);
        if(e.target.value === 'Yes') {
            filters[e.target.name.toLowerCase()] = true;
        } else if(e.target.value === "Reset") {
            filters[e.target.name.toLowerCase()] = null;
        } else  {
            filters[e.target.name.toLowerCase()] = false;
        }

        this.applyFilter();

    }

    rangeFilter(e) {
        filters[e.target.name] = e.target.value;
        this.setState({ [e.target.name] : e.target.value });
        this.applyFilter();
    }

    render() {
        const {matches, compatibility,age, height} = this.state;
        return (
            <div>
               <div>
                {
                    booleanFilters.map(filter =>
                        <div key={filter}>
                            {filter} :
                        <input type="radio" name={filter} onClick={this.radioFilter} value="Yes" /><label>Yes</label>
                        <input type="radio" name={filter} onClick={this.radioFilter} value="No" /><label>No</label>
                        <input type="radio" name={filter} onClick={this.radioFilter} value="Reset" /><label>Reset</label>
                        </div>
                    )
                }

                <div>
                   Compatibility :  0 <input type="range" min="0" max="100" step="10"
                                           name="compatibility" defaultValue={compatibility}
                                           onChange={this.rangeFilter}  /> 100
                    <span> Value : {compatibility}</span>
               </div>

               <div>
                   Age : 18 <input type="range" min="18" max="95" step="1"
                                           name="age" defaultValue={age}
                                           onChange={this.rangeFilter}  /> 95
                   <span> Value : {age}</span>
               </div>

               <div>
                   Height : 130cm <input type="range" min="130" max="210" step="10"
                                   name="height" defaultValue={height}
                                   onChange={this.rangeFilter}  /> 210cm
                   <span> Value : {height}</span>
               </div>
               </div>
                <div>
                {
                 matches.length > 0 &&
                     matches.map((match,index) =>
                         <Match
                             {...match}
                             key={index}/>)


                }
                </div>
            </div>
        );
    }
}


export default Matches;

