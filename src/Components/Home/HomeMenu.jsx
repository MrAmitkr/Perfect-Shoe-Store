import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/HomeMenu.css"

const HomeMenu = () => {
    return (
        <Flex
            height={{ base: "3.2rem", md: "4.94rem" }}
            minW={"100%"}
            justify={"space-around"}
            pos="relative"
            align="center"
            display={{ base: "none", lg: "Flex" }}

            width="36%"
            gap={5}


        // border="1px solid red"

        >
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}


            >
                <Link to="/women">Women</Link>
                <Box
                    top="4rem"
                    className="drop-down-content"
                    left="-2rem"
                    overflow="hidden"
                    bg="white"
                    pos={"absolute"}
                    width="1000px"
                    transition={"all 0.3s"}
                    height={"0vh"}
                    marginTop="14px"
                    >
                    
                        <div className="main-menu">
                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Puma Shoes</p>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-sneakers">Sneakers</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-running">Puma's Running</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-walking">Puma's Walking</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-training-and-gym">Puma's Training and Gym</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-slip-ons">Puma's Slip-ons & Ballerinas</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-slides-and-sandals">Puma's Sandals & Flip Flop</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-motorsport">Puma's Puma's Motorsport</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-badminton">Puma's Badminton</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-softride">Puma's Softride</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/womens/womens-shoes/womens-shoes-nitro">Puma's Nitro</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Adidas Footwear</p>

                                    <li>
                                        <a href="https://www.adidas.co.in/women-running-shoes">Running</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-originals-shoes">Originals</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-slides_flip_flops">Slides & Flip-Flops</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-sneakers">Sneakers</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-tennis-shoes">Tennis</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-basketball-shoes">Basketball</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-football-shoes">Football</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-swim-shoes">Swim</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-walking">Walking</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Nike Collections</p>
                                    <li>
                                        <a href="https://www.nike.com/in/w/mens-lifestyle-shoes-13jrmznik1zy7ok">Lifestyle</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/womens-jordan-shoes-37eefz5e1x6zy7ok">Jordan</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/womens-running-shoes-37v7jz5e1x6zy7ok">Running</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/womens-training-gym-shoes-58jtoz5e1x6zy7ok">Training & Gym</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/womens-sandals-slides-5e1x6zfl76">Slides & Sandals</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Sports  Wear</p>

                                    <li>
                                        <a href="https://www.adidas.co.in/women-t_shirts">Tops / Tees</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-skirts_dresses">Skirts</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-tights">Leggings</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-tracksuits">Joggers / Tracks</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-hoodies">Hoodies</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/women-jackets">Jackets</a>
                                    </li>
                                </ul>


                            </div>
                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Top Brands</p>

                                    <li>
                                        <a href="https://www.adidas.co.in/women-new_arrivals">Adidas New Arrivals</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/new-womens-3n82yz5e1x6">Nike New Release</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/womens-best-5e1x6z76m50">Women's Bestseller</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/women/new-arrivals-9222?source=menu&page=1&orderway=asc&orderby=popular&fp[]=Gender__fq:Women">Reebok New Arrivals</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/women/womens-day-offer-9686?source=menu&page=1&orderway=asc&orderby=popular&fp[]=ShowOnly__fq:discountsonly">Woman Day offer</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading"> Summer Essentials</p>
                                    <p className="category-heading"> Beauty</p>
                                    <p className="category-heading"> Footwear/Bags</p>
                                    <p className="category-heading"> Watches </p>
                                    <p className="category-heading"> Jewellery</p>
                                    <p className="category-heading"> Fragrances</p>
                                </ul>

                            </div>
                        </div>
                   
                </Box>
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}

            >
                <Link to="/men">Men</Link>
                <Box
                    top="4rem"
                    className="drop-down-content"
                    left="-2rem"
                    overflow="hidden"
                    bg="white"
                    pos={"absolute"}
                    width="1000px"
                    transition={"all 0.3s"}
                    height={"0vh"}
                    marginTop="14px"
                >
        
                        <div className="main-menu">
                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Adidas Collection</p>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-running-shoes">Running Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-sneakers">Sneakers</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-originals-shoes">Original Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-swim-shoes">Swim Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-tennis-shoes">Tennis Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-basketball-shoes">Basketball Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-football-shoes">Football Shoes & Boots</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-slides_flip_flops">Flip-flops</a>
                                    </li>
                                    <li>
                                        <a href="https://www.adidas.co.in/men-outdoor-shoes">Shoes & Scandals</a>
                                    </li>

                                </ul>
                                <ul>
                                    <p className="category-heading">Puma Shoes</p>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-sneakers">Puuma's Sneakers</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-running">Puma's Running Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-walking">Walking Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-training-and-gym">Puma's Training and Gym</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-slip-ons">Slip-ons & Ballerinas</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens-sandals-slides-flip-flops-slippers">Sandals & Flip Flop</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-motorsport">MOTORSPORT SHOES</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-nitro">MEN'S NITRO SHOES</a>
                                    </li>
                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-shoes/mens-shoes-trc-blaze">MEN'S TRC BLAZE SHOES</a>
                                    </li>

                                </ul>

                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Nike Shoes</p>

                                                       <li>
                                        <a href="https://www.nike.com/in/w/new-mens-shoes-3n82yznik1zy7ok">Men's Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/mens-jordan-shoes-37eefznik1zy7ok">Men's Jordan Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/mens-running-shoes-37v7jznik1zy7ok">Men's Running Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/mens-training-gym-shoes-58jtoznik1zy7ok">Training & Gym</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/mens-sandals-slides-fl76znik1">Slides & Sandals</a>
                                    </li>
                                </ul>
                                <ul>
                                    <p className="category-heading">New Arrivals</p>

                                    <li>
                                        <a href="https://in.puma.com/in/en/mens/mens-new-arrivals">Puma New Arrivals</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/new-3n82y">Nike New Arrivals</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/men/new-arrivals-9222?source=menu&page=1&fp[]=Gender__fq:Men">Reebok New Arrivals</a>
                                    </li>

                                </ul>
                              
                            </div>

    
                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Reebok Footwear</p>

                                    <li>
                                        <a href="https://www.reebok.in/category/men/running-9152?page=1&orderway=asc&orderby=position">Running</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/men/training-9147?page=1&orderway=asc&orderby=position">Training</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/men/classics-9148?source=menu&page=1&orderway=asc&orderby=position">Classic</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/men/walking-9149?source=menu&page=1&orderway=asc&orderby=position">Walking</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/men/basketball-9150?source=menu&page=1&orderway=asc&orderby=popular">Basketball</a>
                                    </li>
                                    <li>
                                        <a href="https://www.reebok.in/category/men/sandals-slippers-9153?source=menu&page=1&orderway=asc&orderby=popular">Sandals</a>
                                    </li>
                            
                                </ul>
                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading"> Bata Shoes</p>
                                    <li>
                                        <a href="https://www.bata.in/men/shoes/casual-shoes/">Casual Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/men/shoes/chappal-e-flipflop/">Chappal & Flipflop</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/men/shoes/formal-shoes/">Formal Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/men/shoes/loafers-e-moccassin/">Loafers & Moccassin</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/men/shoes/sandals-e-floater/">Sandals & Floater</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/men/shoes/sports/">Sports</a>
                                    </li>


                                </ul>
                                <ul>
                                    <p className="category-heading">Add-ons</p>
                                    <li>
                                        <a href="https://www.bata.in/men/accessories/bags/">Bags</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/men/accessories/belts/">Belts</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/men/accessories/wallets/">Wallets</a>
                                    </li>
                                    <li>
                                        <a href="">Socks</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
               
                </Box>
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}
            >
                <Link to="#">Kids</Link>
                <Box
                    top="4rem"
                    className="drop-down-content"
                    left="-2rem"
                    overflow="hidden"
                    bg="white"
                    pos={"absolute"}
                    width="900px"
                    transition={"all 0.3s"}
                    height={"0vh"}
                    marginTop="14px"
                >
                    <Link to="#">
                        <div className="main-menu">
                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Boys</p>
                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/boys/flipflop/">Flipflop</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/boys/sandals/">Sandals</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/boys/shoes/">Shoes</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/boys/sports/">Sports</a>
                                    </li>
                                  

                                </ul>




                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Girls</p>

                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/girls/ballerina/">Ballerina</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/girls/flipflops/">Flipflops</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/girls/sandals/">Sandals</a>
                                    </li>
                                    <li>
                                        <a href="https://www.bata.in/kids/shoes/girls/shoes/">Shoes</a>
                                    </li>
                                  

                                </ul>
                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Kid by age</p>
                                    <li>
                                        <a href="https://www.nike.com/in/w/baby-toddlers-2j488">Babies & Toddlers (0 to 3 yrs)</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/little-6dace">Younger (4 to 7 yrs)</a>
                                    </li>
                                    <li>
                                        <a href="">Older (8 to 14 yrs)</a>
                                    </li>
                                
                                </ul>
                            </div>

                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Shop By Sport</p>

                                    <li>
                                        <a href="https://www.nike.com/in/w/kids-running-37v7jzv4dh">Running</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/kids-football-1gdj0zv4dh">Football</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/kids-basketball-3glsmzv4dh">Basketball</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/kids-training-gym-58jtozv4dh">Gym and Training</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nike.com/in/w/kids-tennis-ed1qzv4dh">Tennis</a>
                                    </li>

                                </ul>

                            </div>
    

                        </div>
                    </Link>
                </Box>
            </Flex>
           
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}

            >
                <Link to="#">Sale</Link>
                <Box
                    top="4rem"
                    className="drop-down-content"
                    left="-2rem"
                    overflow="hidden"
                    bg="white"
                    pos={"absolute"}
                    width="600px"
                    transition={"all 0.3s"}
                    height={"0vh"}
                    marginTop="14px"
                >
                    <Link to="#">
                        <div className="main-menu">
                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Featured</p>
                                    <li>
                                        <a href="https://www.nike.com/in/w/sale-3yaep">Shop all Sale</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Men's Sale</p>
                                    <li>
                                        <a href="https://www.nike.com/in/w/mens-sale-shoes-3yaepznik1zy7ok">Shoes</a>
                                    </li>

                                 
                                </ul>
                            </div>



                            <div className="hoverlist">
                                <ul>
                                    <p className="category-heading">Women's Sale</p>

                                    <li>
                                        <a href="https://www.nike.com/in/w/womens-sale-shoes-3yaepz5e1x6zy7ok">Shoes</a>
                                    </li>
                                
                                </ul>
                                <ul>
                                    <p className="category-heading">Kid's Sales</p>

                                    <li>
                                        <a href="https://www.nike.com/in/w/kids-sale-shoes-3yaepzv4dhzy7ok">Shoes</a>
                                    </li>

                                </ul>
                            </div>   

                        </div>
                    </Link>
                </Box>
            </Flex>

        </Flex>
    );
};

export default HomeMenu;