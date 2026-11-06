//นำเข้า   วิว  ข้อความ               จาก   ชื่อไลเบอร์รี่
import { View, Text, StyleSheet, Image } from 'react-native';

//ส่งออก เริ่มต้น   ฟังก์ชัน   ชื่อฟังก์ชัน
export default function App(){
  return(
    <View style={homeStyle.container} >
      {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>Nawaporn</Text>

      {/* ใส่ภาพจากไฟล์ */}
      <Image 
      source={require('@/assets/kuromi_PNG.jpg')}
      style={{
        width:402,//กว้าง
        height:402,//สูง
        borderRadius: 201,//มุม
        borderWidth: 5,//ขอบ
        borderColor: "lightblue",//สีขอบ
      }}
      />
      {/* ใส่รูปจากเว็บ */}
      <Image
      source={uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETQj_1sykevtvQ1Jdq4_RLu4rwdgSBCndAq8RLfu6AA&s=10"}
      style={{
        width:402,//กว้าง
        height:402,//สูง
        borderRadius: 201,//มุม
        borderWidth: 5,//ขอบ
        borderColor: "lightblue",//สีขอบ
      }}
      />
      {/* เรียงวัตถุแนวนอน ซ้ายไปขวา */}
      <View style={{flexDirection: "row"}}>
        <Text>🙂 kuromi</Text>
        <Text>☺️ Choso</Text>
      </View>

    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "blue",//สีพื้นหลัง
    flex:1,//ขยายเต็มพื้นที่
    alignItems: "center"
  },
  title:{
    color: "white", //สีอักษร
    fontSize: 32,//ขนาดอักษร
    fontWeight: 700,//ความหนาอักษร 100-900
    fontStyle:"italic",//เอียงอักษร
    textAlign: "center"
  }
}) 