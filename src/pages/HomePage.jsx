import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HomeSlider from "../Components/Home/HomeSlider";

import TrendingSlider from "../Components/Home/TrendingSlider";

import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";


function HomePage() {
  return (
    <Box bgColor={"#fdfdfd"}>
      {/* <Box bgColor={"black"}>  */}
  
      <Navbar />
      {/* Yellow Strip */}
      {/* <Box
        height={10}
        backgroundColor="#f89f17"
        color={"white"}
        fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
        display="flex"
        alignItems="center"
        justifyContent={"center"}>
        New arrivals in womenswear upto30% off ❤️
      </Box> */}
      <Box>
        <Progress
          colorScheme="blue"
          hasStripe
          height="42px"
          value={100}
          isAnimated
        />
        <Text
          color={"white"}
          fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
          position="absolute"
          top={{ base: "117px", sm: "115px", md: "142px", lg: "90px" }}
          left={{ base: "5%", sm: "27%", md: "30%", lg: "40%" }}
        >
          Get unlimited shoes collection for mens and womens with discount upto 40% ❤️
        </Text>
      </Box>

      <HomeSlider />

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <a href="https://www.google.com/search?q=shoe+collection&hl=en&sxsrf=APwXEde055I8nU64k-v9PvHO5kl5dSPaZw:1684778799715&source=lnms&tbm=shop&sa=X&ved=2ahUKEwii44aPwon_AhUngFYBHdzQA2YQ_AUoAnoECAIQBA&biw=948&bih=968&dpr=1">
        <Image
          width="100%"
          borderRadius={"20px"}
          src="https://i.ibb.co/Km50WD2/Capture25.png "
        />
        </a>
   
      </Box>


      {/* Trending Add-ons */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "135px", sm: "200px", md: "200px", lg: "270px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#0000ff"}
        >
          Trending Add-Ons
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            borderRadius={"20px"}
            width="100%"
            src="https://imgtr.ee/images/2023/05/22/2PNT4.png"
          />
        </Box>

        <TrendingSlider />
      </Box>

   

      {/* Big brand discount */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "190px", sm: "280px", md: "280px", lg: "370px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#0000ff"}
        >
          LIMITED BLUE LOCK COLLECTIONS
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={4}
          marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}
        >
          <a href="https://www.nike.com/in/t/dunk-low-next-nature-older-shoes-F3xNXK/FJ4668-400">
          <Image src="https://imgtr.ee/images/2023/05/22/2PfAI.png" />
          </a>

          <a href="https://www.nike.com/in/t/air-force-1-low-retro-shoes-j9C2WJ/DM0576-400">
          <Image src="https://imgtr.ee/images/2023/05/22/2PFbR.png" />
          </a>

          <a href="https://www.nike.com/in/t/air-jordan-1-mid-older-shoes-wqHdzW/DQ8423-400">
          <Image src="https://imgtr.ee/images/2023/05/22/2PFbR.png" /> 
          </a>

          <a href="https://www.nike.com/in/t/air-jordan-1-elevate-low-shoes-XlkVrM/DH7004-400">
          <Image src="https://imgtr.ee/images/2023/05/22/2Ptkm.png" />
          </a>

          <a href="https://www.nike.com/in/t/jordan-1-ko-shoes-RLJcHC/DO5047-411">
          <Image src="https://imgtr.ee/images/2023/05/22/2PBYU.png" />
          </a>

          <a href="https://www.nike.com/in/t/air-jordan-1-mid-shoes-SQf7DM/DQ8426-400">
          <Image src="https://imgtr.ee/images/2023/05/22/2PEsB.png" />     
          </a>

          <a href="https://www.nike.com/in/t/dunk-low-ess-shoes-72dsm8/DQ7576-400">
          <Image src="https://imgtr.ee/images/2023/05/22/2PuOQ.png" />   
          </a>
     
          <a href="https://www.nike.com/in/t/air-jordan-1-retro-high-og-shoes-Pz6fZ9/DZ5485-410">
          <Image src="https://imgtr.ee/images/2023/05/22/2PFbR.png" /> 
          </a>

          <a  href="https://www.nike.com/in/t/air-force-1-low-ambush-shoes-7fq542/DV3464-400">  
          <Image
            display={{ base: "block", sm: "none", md: "block", lg: "block" }}
            src="https://imgtr.ee/images/2023/05/22/2PfAI.png"
          />
          </a>

          <a  href="https://www.nike.com/in/t/air-jordan-1-low-se-shoes-J1PVS2/DZ5376-469">
          <Image
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            src="https://imgtr.ee/images/2023/05/22/2PiHb.png"
          />           
          </a>

          <a  href="https://www.nike.com/in/t/air-force-1-low-ambush-shoes-7fq542/DV3464-400">
          <Image
            display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            src="https://imgtr.ee/images/2023/05/22/2P3l7.png"
          />
          </a>

          <a  href="https://www.nike.com/in/t/sb-zoom-blazer-mid-plus-skate-shoes-TSWztD/DV5468-300">
          <Image
            display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            src="https://imgtr.ee/images/2023/05/22/2PPLA.png"
          />
          </a>
      
        </Grid>
      </Box>


      
      {/* Our Benifits */}
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#0000ff"}
        >
          Our Benefits
        </Text>

        <Flex  marginTop={{ base: 3, sm: 4, md: 6, lg: 10 }} gap="100px">
          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
          </Box>

          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg" />
          </Box>

          <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg" />
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
