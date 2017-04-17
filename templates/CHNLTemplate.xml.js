var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate> 
      <banner> 
        <title>CHNL</title>
      </banner>
      <list> 
        <section> 
	  <listItemLockup> 
	    <title>Slowed Down Rap Videos</title>
	    <decorationLabel>3</decorationLabel>            
	    <relatedContent> 
	      <grid>
	        <section>                   
		  <lockup videoURL="${this.BASEURL}videos/hotline.mp4">
		    <img src="${this.BASEURL}images/hotline.jpg" width="500" height="308" />
		    <title>HOTLINE</title>
		  </lockup>
		  <lockup videoURL="${this.BASEURL}videos/commas.mp4">
		    <img src="${this.BASEURL}images/commas.jpg" width="500" height="308" />
		    <title>COMMAS</title>
		  </lockup>
		  <lockup videoURL="${this.BASEURL}videos/party.mp4">
		    <img src="${this.BASEURL}images/party.jpg" width="500" height="308" />
		    <title>PARTY?</title>
		  </lockup>
		</section>
	      </grid>
	    </relatedContent>
	  </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
