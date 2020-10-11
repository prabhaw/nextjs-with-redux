import { connect } from "react-redux";
import { getItems } from "./../Redux/actions/fetchdata.action";
import { wrapper } from "./../Redux/store";

 function Home(props) {
  return (
    <>
   

      {props.foo.map((item, i) => {
        return <p key={i}>{item.title}</p>;
      })}
   
    <style jsx>{``}</style>
  </>
  )}
  export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    await store.dispatch(getItems());
    // store.dispatch(addCount());
  });
  // export const getStaticProps = wrapper.getStaticProps(async (ctx) => {
  //   async ({ store, preview }) => {
  //     await store.dispatch(getItems());
  //   };
  //   //
  // });
  const mapDispatchToProps = (dispatch) => {
    return {};
  };
  export default connect((state) => state.reducer, mapDispatchToProps)(Home);
  
