List<Vehicle> vehicles = List.of(
   new Car("car_brand", "car_model", "car_color", 300),
   new Bus("bus_brand", "bus_model", "bus_color", 8)
);

List<Vehicle> copyList = new ArrayList<>();
for (Vehicle vehicle : vehicles) {
copyList.add(vehicle.clone());
}

copyList.forEach(System.out::println);

System.out.println("==========================================");

VehicleCache registry = new VehicleCache();
registry.put(vehicles);
System.out.println(registry.get("car_brand car_model"));