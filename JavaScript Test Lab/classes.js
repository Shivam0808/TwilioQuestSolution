class Materializer {
	
	constructor(targetName) {
		this.target = targetName;  
		this.activated = false;
	}
	
	activate() {
		this.activated = true;
		return this.activated;
	}
  

	materialize() {
		
		if (this.activated === true) {
			
			return this.target;
		
		} else {
		
			return;
			
		}
		
    }
 }

