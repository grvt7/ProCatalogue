package com.catalogue.productcatalogue.dbdao;

import com.catalogue.productcatalogue.model.Deliver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeliverDao extends JpaRepository<Deliver, Integer> {
}
