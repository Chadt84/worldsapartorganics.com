import React from 'react';
import HikingImage from '../../assets/img/activities/5.jpg';
import {Helmet} from "react-helmet";

const Activities: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds Apart - Activities</title>
            </Helmet>
            <div id='parallax-1' className="parallax-window" data-parallax="scroll"
                 data-image-src={HikingImage}
                 data-z-index="1">
                <div className="col-xs-5 text-activities-left">
                    <div className="title-activities col-xs-12">Hiking</div>
                    <p>We offer several free guided hikes, all within reasonable distance of the farm. The most
                        accessible are
                        the
                        waterfalls and natural swimming pools. Not more than a five minute walk uphill from the lodging
                        facilities
                        you will find the cascades and terraced crystalline pools of "La Quebrada Santa Rosa," our
                        closest
                        mountain
                        stream. The "quebrada hikes" present magnificent views of the entire valley and also give
                        visitors a
                        chance
                        to appreciate some untouched secrets of this area.
                        <br/>
                        Visitors can really get a good look at local heritage by taking advantage of our "Trapiche
                        Hike." About
                        thirty minutes uphill from the farm there is a panela mill or "trapiche." Panela is a product
                        extracted
                        from
                        sugar cane and is a staple in Colombian kitchens nation wide. This hike gives our guests the
                        opportunity
                        to see the local
                        community come together, truly an awesome cultural experience.
                        <br/>
                        The Trapiche Hike because if its
                        extensiveness is provided at an aditional cost of $45.000 COP/person
                    </p>
                </div>
            </div>
            <div id='parallax-2' className="parallax-window" data-parallax="scroll"
                 data-image-src="img/activities/6.png"
                 data-z-index="1">
                <div className="col-xs-5 col-xs-offset-7 text-activities-right">
                    <div className="title-activities col-xs-12">Paragliding</div>
                    <p>From El Alto de Matasanos we offer tandem paragliding. The point of take off has an elevation of
                        approximately 2200m. From there you will glide over the northernmost parts of Barbosa. Emerald
                        green
                        hills
                        segmented by the regions cascading mountain rivers. On a clear day you can even see “El Peñol.”
                        Flight
                        time
                        is estimated between 15 to 20 minutes.
                        <b>$155.000COP/person</b>
                    </p>
                </div>
            </div>
            <div id='parallax-3' className="parallax-window" data-parallax="scroll"
                 data-image-src="img/activities/2.jpg"
                 data-z-index="1">
                <div className="col-xs-5 text-activities-left">
                    <div className="title-activities col-xs-12">Mountain Biking</div>
                    <p>For groups of 2-6 persons we offer the Mocorongo Milk Run. It is roughly ten kilometers of mostly
                        downhill
                        trail starting in la vereda Matasanos bringing you directly back to Worlds Apart for a total
                        descent of
                        approximately 900m. On this ride we will pass through the areas dairy region giving you the
                        opportunity
                        to
                        get in touch with the local rhythm of life. For much of our downhill journey we will be
                        paralleling La
                        Quebrada Santa Rosa(a large mountain stream). This river is an amazing feature of the areas
                        natural
                        landscape. It’s cascades and tumbling waters give birth to terraced swimming holes which mark
                        the
                        descending
                        path all the way to Barbosa. We will stop at several points to rest and refresh. One of which
                        will be at
                        the
                        end of trip when we stop at a we’ll know local swimming hole called “La Crypta”(The Crypt). It
                        is.
                        spacious
                        and deep and it’s high rock banks present the opportunity for modest cliff jumping.
                        This activity includes:
                        American Breakfast
                        Mid tour Refreshments and snacks
                        Waterfall and swimming hole pit stops

                        Total duration: 3-4 hours

                        Cost per person $ 120.000 COP
                    </p>
                </div>
            </div>
            <div id='parallax-4' className="parallax-window" data-parallax="scroll"
                 data-image-src="img/activities/1.png"
                 data-z-index="1">
                <div className="col-xs-5 col-xs-offset-7 text-activities-right">
                    <div className="title-activities col-xs-12">Workshops</div>
                    <p>Our workshops at Wolds Apart can be divided into two categories. Permaculture and construction.
                        Since we
                        maintain an organic farm on the premises we offer guests the opportunity to lend a hand with
                        propagation
                        and plant care. In the means of construction, we are constantly expanding our facilities to
                        better
                        accommodate you. This also presents an opportunity for our visitors who may by savvy in
                        carpentry or
                        simply enjoy working to help out in many ways. For people looking to be productive during their
                        travels
                        and work against the cost of their stay we provide a well established work exchange program.
                    </p>
                </div>
            </div>
            <div id='parallax-5' className="parallax-window" data-parallax="scroll"
                 data-image-src="img/activities/4.png"
                 data-z-index="1">
                <div className="col-xs-5 text-activities-left">
                    <div className="title-activities col-xs-12">Horseback Riding</div>
                    <p>In collaboration with some of the local horse stables we organize several guided horseback tours.
                        It is a
                        common and well liked activity for couples and small groups, ranging in time from hourly to all
                        day
                        outings.
                        Prices vary depending on availability and group size.</p>
                    <h3>Not available at the moment</h3>
                </div>
            </div>
            <div id='parallax-6' className="parallax-window" data-parallax="scroll"
                 data-image-src="img/activities/6.jpg"
                 data-z-index="1">
                <div className="col-xs-5 col-xs-offset-7 text-activities-right">
                    <div className="title-activities col-xs-12">Canyoning</div>
                    <p>
                    </p>
                    <h3>Not available at the moment</h3>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Activities;
