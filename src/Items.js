import "./Items.css"
import Heading from "./components/Heading";
import Details from "./components/Details";
function Items() {
          return (<div className="itemsContainer">
                    <section className="items">
                              <Heading />
                              <Details />
                    </section>
                    
                    <section className="items">
                              <Heading />
                              <Details />
                    </section>

                    <section className="items">
                              <Heading />
                              <Details />
                    </section>

                    <section className="items">
                              <Heading />
                              <Details />
                    </section>
          </div>
          )
}

export default Items;