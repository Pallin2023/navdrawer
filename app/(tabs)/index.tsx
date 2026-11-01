import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
 
const data = [
  {
    id:1,
    image:'https://cdn.futbolperuano.com/sdi/2023/12/26/la-que-se-viene-para-la-seleccion-peruana-en-el-2024-amistosos-copa-america-y-eliminatorias-2026-1215187.jpg',
  },
   {
    id:2,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCaE0UoKS0P2zFE8J1oO8KHt18LQxE2Ji4g&s',
  },
   {
    id:3,
    image:'https://www.tvperu.gob.pe/sites/default/files/styles/note/public/gianluca_lapadula_1_1.jpg?itok=ruvs_3nJ',
  },
     {
    id:4,

     image: require('../../assets/images/pet2.jpg'),
  },
];
const width = Dimensions.get("window").width;
 
function App() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        autoPlay={true}
        autoPlayInterval={3000}
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={progress}
        renderItem={({ index, item }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Image style={{width:'auto', height:200}} source={{uri:item.image}}></Image>
           
          </View>
          
        )}
      />
 
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
        <View>
                    <Text style={{textAlign:'center'}}>dashboard</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum iusto quis sequi dignissimos! Ut, error placeat! Autem, laudantium blanditiis, ex porro maiores minus quis iste nulla eligendi officia pariatur?
                    Deserun rattione eius ut eum quam nobis, voluptate iure autem quas itaque consectetur quo dolor aliquam quae nostrum accusantium ipsum reiciendis doloremque eaque a illum quod nesciunt impedit dolorem! Accusamus.
                    Molestias sed nam optio incidunt quia facere autem placeat maxime natus praesentium veritatis, molestiae ullam expedita voluptatem at asperiores, eveniet nesciunt, magnam quae perferendis id quaerat. Ea nesciunt tenetur eius?</Text>
                      <Image source={require('../../assets/images/pet2.jpg')} style={{width:300,height:250}}>
                  
                            </Image>
           </View>
    </View>
    
  );
}
 
export default App