package com.catalogue.productcatalogue.controller;

import com.catalogue.productcatalogue.model.Deliver;
import com.catalogue.productcatalogue.service.DeliverService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DeliverController {
    private final DeliverService deliverService;

    public DeliverController(DeliverService deliverService) {
        this.deliverService = deliverService;
    }

    @GetMapping("/deliver/{pin}")
    public Deliver getDelivery(@PathVariable String pin){
        return this.deliverService.getDelivery(Integer.parseInt(pin));
    }

    @GetMapping("/delivery/{pin}")
    public boolean checkDelivery(@PathVariable String pin){
        return this.deliverService.check(Integer.parseInt(pin));
    }

    @PostMapping("/deliver")
    public Deliver postDelivery(@RequestBody Deliver data){
        return this.deliverService.postDelivery(data);
    }
}
