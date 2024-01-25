package com.catalogue.productcatalogue.service;

import com.catalogue.productcatalogue.dbdao.DeliverDao;
import com.catalogue.productcatalogue.model.Deliver;
import org.springframework.stereotype.Service;

@Service
public class DeliverServiceImpl implements DeliverService{
    private final DeliverDao deliverDao;

    public DeliverServiceImpl(DeliverDao deliverDao) {
        this.deliverDao = deliverDao;
    }

    @Override
    public Deliver getDelivery(int pin) {
        return this.deliverDao.getById(pin);
    }

    @Override
    public Deliver postDelivery(Deliver data) {
        return this.deliverDao.save(data);
    }

    @Override
    public boolean check(int pin) {
        return this.deliverDao.existsById(pin);
    }
}
