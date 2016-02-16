_fcts = {
	pathExists:function(o,p){ // _fcts.pathExists
		if(typeof p=='undefined')
			return false;
		var members = p.split("."),
			currentMember = o;
		for (var i = 0; i < members.length; i++) { // Here we need to take special care of possible method calls and arrays, but I am too lazy to write it down.
			if(currentMember==null)
				return false;
			if(currentMember.hasOwnProperty(members[i]))
				currentMember = currentMember[members[i]];
			else
				return false;
		}
		return currentMember;
	}
};