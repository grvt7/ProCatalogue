package com.catalogue.productcatalogue.service;

import com.catalogue.productcatalogue.model.Deliver;

public interface DeliverService {
    Deliver getDelivery(int pin);
    Deliver postDelivery(Deliver data);

    boolean check(int pin);
}
