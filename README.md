# jMove

css3 animation/transition

demo here http://jatecl.github.io/jmove/

## keyframes

css 3 animation keyframes:

```javascript
jMove.keyframes("name", {
		from: { transform: "scale(1.2)" },
		to: { transform: "scale(1)" }
	});
```
```css
@-webkit-keyframes name{
	from{-webkit-transform:scale(1.2);}
	to{-webkit-transform:scale(1);}
}
```

or:

```javascript
jMove.keyframes().add("name1", {
		from: { transform: "scale(1)" },
		to: { transform: "scale(1.2)" }
	}).add("name2", {
		from: { transform: "scale(1)" },
		to: { transform: "scale(0.8)" }
	}).flush();
```
```css
@-webkit-keyframes name1{
	from{-webkit-transform:scale(1);}
	to{-webkit-transform:scale(1.2);}
}
@-webkit-keyframes name2{
	from{-webkit-transform:scale(1);}
	to{-webkit-transform:scale(0.8);}
}
```

## animation

```javascript
jMove.animation(element1, "name1");
```

or:

```javascript
jMove.animation(element2, "name2 1s ease-in-out 0.5s infinite alternate");
```

## animationReady

wait for realtime keyframes

```javascript
var keyframes_name = "temp_" + new Date().getTime();
jMove.keyframes(keyframes_name, {
	from: { left: "0px" },
	to: { left: Math.random() * 500 + "px" }
});
jMove.animationReady(function(){	
	jMove.animation(element3, keyframes_name);
});
```

## transition &amp; transitionReady

```javascript
jMove.transition(element4, "all 0.4s ease 0.1s");
jMove.transitionReady(function(){
	element4.style.left = Math.random() * 500 + "px";
});
```

or:

```javascript
jMove.transition(element5, "left 0.4s ease 0.1s", "top 1s ease-in 0.5s", function(){	
	element5.style.left = Math.random() * 500 + "px";	
	element5.style.top = Math.random() * 50 + "px";
});
```

## to

an easier way

```javascript
jMove.to(element6, 0.4, { left: Math.random() * 500 + "px" });
```

or:

```javascript
jMove.to(element7, 2, { 
	left: Math.random() * 500 + "px", 
	top:Math.random() * 300 + "px"
}, { 
	ease: jMove.ease.sineInOut, 
	delay: 0.5 
}, function(){ alert("end") });
```

## from

```javascript
jMove.from(element8, 0.4, { left: Math.random() * 500 + "px" });
```

## fromTo

```javascript
jMove.fromTo(element9, 0.4, 
	{ left: Math.random() * 500 + "px" }, 
	{ left: Math.random() * 500 + "px" });
```

## ease

```javascript
jMove.ease = {
	in$: 'ease-in',
	out: 'ease-out',
	inOut: 'ease-in-out',
	linear: 'linear',
	ease: 'ease',
	snap: 'cubic-bezier(0,1,.5,1)',
	quadIn: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
	quadOut: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
	quadInOut: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
	cubicIn: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
	cubicOut: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
	cubicInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
	quartIn: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
	quartOut: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
	quartInOut: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
	quintIn: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
	quintOut: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
	quintInOut: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
	sineIn: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
	sineOut: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
	sineInOut: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
	expoIn: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
	expoOut: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
	expoInOut: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
	circIn: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
	circOut: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
	circInOut: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
	backIn: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
	backOut: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
	backInOut: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
};
```

## matrix

```javascript
jMove.matrix()
	.scale(1.5)
	.rotate(30)
	.skew(20, 10)
	.translate(120, 10)
	.flush(element10);
```

## move

```javascript
var move = jMove(element11)
	.from(0.4, { scale: 0.5 }, 0.3)
	.to(0.8, { rotate: 150 })
	.fromTo(1.2, { left: "100px" }, { left: "300px" })
	.timeScale(2).flush(function(){
		alert("end");
	});
```

## move.kill

```javascript
var move = jMove(element12)
	.from(0.4, { scale: 0.5 }, 0.3)
	.to(0.8, { rotate: 150 })
	.fromTo(1.2, { left: "100px" }, { left: "300px" })
	.timeScale(2).flush(function(){
		alert("end");
	});
setTimeout(function(){
	move.kill();
}, 1200);
```