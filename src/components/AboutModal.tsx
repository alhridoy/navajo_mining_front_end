// AboutModal.tsx
import React from "react";
import Modal from "react-modal";

interface AboutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="About Modal"
  >
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">About the Data</h4>
        <button type="button" className="close" onClick={onRequestClose}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <h1>
          Uranium mining in Navajo Nation, Impacts on Environment and Health,
          and Geospatial Modeling
        </h1>
        <img src="images/mines.jpg" alt="" width="300" height="300" />
        <h3>Background</h3>
        <p>
          Residents of Navajo Nation (Dine Bikeyah), a sovereign Indigenous
          Tribal nation of the American Southwest, are vulnerable to
          environmental pollution from various sources such as resource
          extraction and unregulated solid waste disposal (Kirkemeno et al.
          1998; Ong et al. 2014; Lewis et al. 2017). From the 1940s through the
          1980s, one of the most sought-after resources was uranium, and today
          there are hundreds of abandoned uranium mines across Navajo lands.
          This legacy of mining and the continuing presence of AUMs has caused
          significant environmental contamination in Navajo Nation (Eichstaedt
          1994; Masco 2013; Voyles 2015; Lewis et al. 2017). Understanding the
          distribution of potential exposure to these AUMs is a significant
          concern in Navajo communities. Some recent work to model this exposure
          potential includes a multi-criteria decision analysis (MCDA)
          (Malczewski 2006) model, developed by Lin et al. (2020) to analyze and
          understand potential exposure within Navajo Nation.
        </p>
        <img src="images/mcda.jpg" alt="" width="300" height="300" />
        <h3>MCDA Model</h3>

        <p>
          The MCDA model predicts potential exposure based on several
          environmental criteria (wind, topography, hydrology, etc.) represented
          as raster surfaces, in which cells contain an index value indicating
          this potentiality on a normalized scale of 0-1. The final model output
          is a weighted linear combination (WLC) of the individual criteria.
          This final output represents cumulative potential for exposure from
          the above-described environmental criteria (Lin et al. 2020).
        </p>

        <h3>Methodology</h3>

        <p>
          Critical layers were created following the methodology by{" "}
          <a
            href="https://www.researchgate.net/publication/341710587_Environmental_risk_mapping_of_potential_abandoned_uranium_mine_contamination_on_the_Navajo_Nation_USA_using_a_GIS-based_multi-criteria_decision_analysis_approach"
            target="_blank"
          >
            Lin et al. (2020).
          </a>{" "}
          Critical layers were generated using the following data-sources:
          abandoned uranium mine point data sourced from the
          <a
            href="https://www.epa.gov/navajo-nation-uranium-cleanup/abandoned-mines-cleanup"
            target="_blank"
          >
            U.S. Environmental Protection Agency (USEPA) (U.S. EPA 2007){" "}
          </a>
          ; meteorological data sourced from the{" "}
          <a
            href="https://psl.noaa.gov/data/gridded/data.narr.html"
            target="_blank"
          >
            North American Regional Reanalysis (NARR) model (NOAA 2020){" "}
          </a>
          ; a 30-m digital elevation model (DEM) sourced from the{" "}
          <a
            href="https://www.usgs.gov/the-national-map-data-delivery"
            target="_blank"
          >
            U.S. Geological Survey (USGS) (U.S. Geological Survey n.d.){" "}
          </a>
          ; road networks sourced from the{" "}
          <a
            href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html"
            target="_blank"
          >
            {" "}
            U.S. Census Bureau (U.S. Census Bureau n.d.){" "}
          </a>
          ; downslope drainage and ground water sample data sourced from{" "}
          <a
            href="https://www.epa.gov/navajo-nation-uranium-cleanup/abandoned-mines-cleanup"
            target="_blank"
          >
            USEPA
          </a>{" "}
          and the{" "}
          <a
            href="https://link.springer.com/article/10.1007/s12403-016-0226-6"
            target="_blank"
          >
            University of New Mexico
          </a>{" "}
          (U.S. EPA 2007; Hoover et al. 2017) (U.S. EPA 2007; Hoover et al.
          2017); and vegetation data from the{" "}
          <a
            href="https://measures.arizona.edu/documents/dataviewer/K_Didan_IGARSS_2010.pdf"
            target="_blank"
          >
            NASA Vegetation Index and Phenology (VIP) global dataset (Didan
            2010).{" "}
          </a>{" "}
          The critical layers (represented as raster datasets) are as follows:
        </p>

        <p> &#x2022 Proximity to AUM sites</p>
        <p> &#x2022 Proximity to roads</p>
        <p> &#x2022 Proximity to downslope drainages from AUM sites</p>
        <p> &#x2022 Topographic landforms</p>
        <p> &#x2022 Wind index</p>
        <p> &#x2022 Topographic Wind Exposure (TWE)</p>
        <p> &#x2022 Vegetation Robustness (NDVI)</p>
        <p> &#x2022 Groundwater contamination</p>

        <p>
          This map displays an interactive version of the combined predicted
          exposure, including mine locations. Users can pan and zoom to a
          specifc location, such as their home and see the predicted exposure
          class for that area by clicking on the map.
        </p>

        <p>
          The main aim of our web map was to display the described MCDA model
          output and make it interactive. In which a user can both visually pan
          and zoom on the predicted exposure surface and retrieve the predicted
          exposure value for a given area. Such interactivity will hopefuly it
          easier for a resident of Navajo Nation to, for example, know the
          predicted potential exposure from this model at their home’s location,
          or other areas of interest.
        </p>

        <img src="images/team.jpg" alt="" width="400" height="200" />

        <h3>About the Team</h3>

        <p>
          Team Member (lead):{" "}
          <a href="https://theodros-woldeyohannes.github.io/" target="_blank">
            Theodros Woldeyohannes{" "}
          </a>
          (twoldey94@unm.edu){" "}
        </p>
        <p>
          Team Member:{" "}
          <a href="https://ebrannen2390.github.io/" target="_blank">
            Eric Brannen{" "}
          </a>
          (ebrannen@unm.edu){" "}
        </p>
        <p>
          Team Member:{" "}
          <a href="https://maggieramirez.github.io/" target="_blank">
            Maggie Ramirez{" "}
          </a>
          (mramirez10@unm.edu){" "}
        </p>
        <p>
          Project Advisor:{" "}
          <a href="https://lipingyang.org/" target="_blank">
            Dr. Liping Yang{" "}
          </a>{" "}
          (lipingyang@unm.edu){" "}
        </p>

        <p>
          This webmap was inspired by the UNM College of Pharmacy{" "}
          <a href="https://unmcop.unm.edu/metals/" target="_blank">
            Navajo Water GIS{" "}
          </a>
          , developed by Daniel Beene and Manideep Potluru.
        </p>

        <img src="images/data.jpg" alt="" width="300" height="300" />

        <h3>Data Sources</h3>

        <p>
          <a
            href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html"
            target="_blank"
          >
            Bureau, U. C. TIGER/Line Shapefiles. Census.gov.{" "}
          </a>{" "}
        </p>
        <p>
          <a href="https://getbootstrap.com/" target="_blank">
            Contributors, M. O., Jacob Thornton, and Bootstrap. Bootstrap.
          </a>{" "}
        </p>
        <p>
          <a
            href="https://www.semanticscholar.org/paper/MULTI-SATELLITE-EARTH-SCIENCE-DATA-RECORD-FOR-AND-Didan/a1af03581529b0ce5c72adbfca22228c619c3fb1"
            target="_blank"
          >
            Didan, K. 2009. MULTI-SATELLITE EARTH SCIENCE DATA RECORD FOR
            STUDYING GLOBAL VEGETATION TRENDS AND CHANGES.{" "}
          </a>
        </p>
        <p>
          <a
            href="https://link.springer.com/article/10.1007/s12403-016-0226-6"
            target="_blank"
          >
            Elevated Arsenic and Uranium Concentrations in Unregulated Water
            Sources on the Navajo Nation, USA | SpringerLink.{" "}
          </a>
        </p>
        <p>
          <a
            href="https://www.researchgate.net/publication/341710587_Environmental_risk_mapping_of_potential_abandoned_uranium_mine_contamination_on_the_Navajo_Nation_USA_using_a_GIS-based_multi-criteria_decision_analysis_approach"
            target="_blank"
          >
            Environmental risk mapping of potential abandoned uranium mine
            contamination on the Navajo Nation, USA, using a GIS-based
            multi-criteria decision analysis approach.
          </a>{" "}
        </p>
        <p>
          <a href="https://jquery.com/" target="_blank">
            JS.foundation, J. F.-. jQuery.{" "}
          </a>{" "}
        </p>
        <p>
          <a href="https://leafletjs.com/" target="_blank">
            Leaflet — an open-source JavaScript library for interactive maps.{" "}
          </a>{" "}
        </p>
        <p>
          <a href="https://unmcop.unm.edu/metals/" target="_blank">
            Beene, Daniel, & Potulu, Manideep. Navajo Water GIS. UNM College of
            Pharmacy.{" "}
          </a>{" "}
        </p>
        <p>
          <a
            href="https://psl.noaa.gov/data/gridded/data.narr.html"
            target="_blank"
          >
            NCEP North American Regional Reanalysis (NARR): NOAA Physical
            Sciences Laboratory NCEP North American Regional Reanalysis.
          </a>{" "}
        </p>
        <p>
          <a
            href="https://www.usgs.gov/the-national-map-data-delivery"
            target="_blank"
          >
            The National Map - Data Delivery | U.S. Geological Survey.{" "}
          </a>{" "}
        </p>
        <p>
          <a
            href="https://www.epa.gov/navajo-nation-uranium-cleanup/abandoned-mines-cleanup"
            target="_blank"
          >
            US EPA, R. 09. 2016a. Abandoned Mines Cleanup.{" "}
          </a>{" "}
        </p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-default"
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </div>
  </Modal>
);

export default AboutModal;
