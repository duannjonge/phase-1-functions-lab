// Code your solution in this file!
function distanceFromHqInBlocks(distance){

    if (distance>42){

        return distance-42;
    }else{

        return 42-distance;
    }

   
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(distance){
if (distance>42)
{
    return(distance-42)*264;

}else{

    return(42-distance)*264;
}


}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(distance,start){
    if (distance>42){

        return (start-distance)*264;
    }else{

        return(distance-start)*264;
    }


}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination){
let drive=distanceTravelledInFeet(start, destination);
if (drive <=400){

    return 0;
}else if (400< drive && drive<=2000){

    return .02*(drive-400);
}else if (drive>2000 && drive<=2500){


    return 25;
}else{

    return 'cannot travel that far';
}


}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);